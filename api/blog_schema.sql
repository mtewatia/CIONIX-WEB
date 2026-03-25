-- Blog Posts Table Schema
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content LONGTEXT NOT NULL,
    category VARCHAR(100),
    sector VARCHAR(100),
    sector_label VARCHAR(100),
    author VARCHAR(100),
    author_image VARCHAR(255),
    read_time INT,
    image VARCHAR(255),
    featured BOOLEAN DEFAULT 0,
    published BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index on frequently queried columns
CREATE INDEX idx_sector ON blog_posts(sector);
CREATE INDEX idx_published ON blog_posts(published);
CREATE INDEX idx_created_at ON blog_posts(created_at);
