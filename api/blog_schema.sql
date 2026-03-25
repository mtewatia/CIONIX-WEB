-- Blog Posts Table Schema
CREATE TABLE blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(500) NOT NULL,
  excerpt TEXT,
  content LONGTEXT,
  category VARCHAR(100),
  sector VARCHAR(50) DEFAULT 'technologies',
  sector_label VARCHAR(50) DEFAULT 'Technologies',
  author VARCHAR(255) DEFAULT 'Admin',
  author_image VARCHAR(500),
  read_time VARCHAR(50) DEFAULT '5 min read',
  image VARCHAR(500),
  featured TINYINT(1) DEFAULT 0,
  published TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index on frequently queried columns
CREATE INDEX idx_sector ON blog_posts(sector);
CREATE INDEX idx_published ON blog_posts(published);
CREATE INDEX idx_created_at ON blog_posts(created_at);
