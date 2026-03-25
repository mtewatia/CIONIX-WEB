<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$host = getenv('DB_HOST') ?: 'localhost';
$db   = getenv('DB_NAME') ?: 'u694997230_cionix';
$user = getenv('DB_USER') ?: 'u694997230_cionixuser';
$pass = getenv('DB_PASS') ?: 'Cionix@0090';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'DB connection failed: ' . $conn->connect_error]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$path = isset($_GET['action']) ? $_GET['action'] : '';

switch ($method) {
    case 'GET':
        if ($path === 'single' && isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $result = $conn->query("SELECT * FROM blog_posts WHERE id = $id");
            echo json_encode($result->fetch_assoc());
        } else {
            $sector = isset($_GET['sector']) ? $conn->real_escape_string($_GET['sector']) : null;
            $published_only = isset($_GET['published']) ? true : false;
            
            $sql = "SELECT * FROM blog_posts";
            $conditions = [];
            if ($sector) $conditions[] = "sector = '$sector'";
            if ($published_only) $conditions[] = "published = 1";
            if ($conditions) $sql .= " WHERE " . implode(' AND ', $conditions);
            $sql .= " ORDER BY created_at DESC";
            
            $result = $conn->query($sql);
            $posts = [];
            while ($row = $result->fetch_assoc()) {
                $row['featured'] = (bool)$row['featured'];
                $row['published'] = (bool)$row['published'];
                $posts[] = $row;
            }
            echo json_encode($posts);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $conn->prepare("INSERT INTO blog_posts (slug, title, excerpt, content, category, sector, sector_label, author, author_image, read_time, image, featured, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssssssii", 
            $data['slug'], $data['title'], $data['excerpt'], $data['content'],
            $data['category'], $data['sector'], $data['sector_label'],
            $data['author'], $data['author_image'], $data['read_time'],
            $data['image'], $data['featured'], $data['published']
        );
        $stmt->execute();
        echo json_encode(['id' => $conn->insert_id, 'success' => true]);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $id = intval($data['id']);
        $stmt = $conn->prepare("UPDATE blog_posts SET slug=?, title=?, excerpt=?, content=?, category=?, sector=?, sector_label=?, author=?, author_image=?, read_time=?, image=?, featured=?, published=? WHERE id=?");
        $stmt->bind_param("sssssssssssiii",
            $data['slug'], $data['title'], $data['excerpt'], $data['content'],
            $data['category'], $data['sector'], $data['sector_label'],
            $data['author'], $data['author_image'], $data['read_time'],
            $data['image'], $data['featured'], $data['published'], $id
        );
        $stmt->execute();
        echo json_encode(['success' => true]);
        break;

    case 'DELETE':
        $data = json_decode(file_get_contents('php://input'), true);
        $id = intval($data['id']);
        $conn->query("DELETE FROM blog_posts WHERE id = $id");
        echo json_encode(['success' => true]);
        break;
}

$conn->close();
?>