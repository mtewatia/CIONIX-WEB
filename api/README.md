# PHP Blog API - Hostinger Deployment Guide

## Overview
This is a PHP-based REST API for managing blog posts. It supports CRUD operations (Create, Read, Update, Delete) and includes sector filtering.

## Files
- `blog.php` - Main API endpoint
- `blog_schema.sql` - Database schema
- `.htaccess` - URL rewriting configuration

## Step 1: Database Setup on Hostinger

### Create Database
1. Log into Hostinger hPanel
2. Go to **Databases** → **MySQL Databases** (or **phpMyAdmin**)
3. Create a new database (e.g., `cionix_blog`)
4. Create a database user with full permissions

### Create Tables
1. Open **phpMyAdmin**
2. Select your database
3. Go to **Import** tab
4. Copy content from `blog_schema.sql` and paste into the SQL field
5. Click **Go** to execute

## Step 2: Upload API Files to Hostinger

### Via File Manager
1. In Hostinger hPanel, go to **Files** → **File Manager**
2. Navigate to `public_html` folder
3. Create an `api` folder if it doesn't exist
4. Upload these files to the `api` folder:
   - `blog.php`
   - `.htaccess`

### Via FTP (Alternative)
1. Use FTP client (FileZilla, WinSCP, etc.)
2. Connect with Hostinger FTP credentials
3. Navigate to `public_html/api/`
4. Upload the files

## Step 3: Configure Environment Variables

### Option 1: Using Hostinger File Manager
Create a `.env` file in the `api` folder with:
```
DB_HOST=localhost
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
```

### Option 2: Using .htaccess (Alternative)
Edit `.htaccess` to include:
```apache
SetEnv DB_HOST localhost
SetEnv DB_NAME your_database_name
SetEnv DB_USER your_database_user
SetEnv DB_PASS your_database_password
```

### Option 3: Hardcoded (Not Recommended)
Edit `blog.php` lines 13-16 directly with your credentials.

## Step 4: Test the API

Test with these URLs:

### Get All Blog Posts
```
https://yourdomain.com/api/blog.php
```

### Get Published Posts Only
```
https://yourdomain.com/api/blog.php?published=1
```

### Get Posts by Sector
```
https://yourdomain.com/api/blog.php?sector=technologies
```

### Get Single Post
```
https://yourdomain.com/api/blog.php?action=single&id=1
```

### Create New Post (POST)
```bash
curl -X POST https://yourdomain.com/api/blog.php \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "my-blog-post",
    "title": "My Blog Post",
    "excerpt": "Short summary",
    "content": "Full content here",
    "category": "tutorial",
    "sector": "technologies",
    "sector_label": "CIONIX Technologies",
    "author": "John Doe",
    "author_image": "https://...",
    "read_time": 5,
    "image": "https://...",
    "featured": true,
    "published": true
  }'
```

### Update Post (PUT)
```bash
curl -X PUT https://yourdomain.com/api/blog.php \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "slug": "updated-post",
    "title": "Updated Title",
    ...other fields...
  }'
```

### Delete Post (DELETE)
```bash
curl -X DELETE https://yourdomain.com/api/blog.php \
  -H "Content-Type: application/json" \
  -d '{"id": 1}'
```

## Step 5: Integrate with Frontend

In your React app, update `blogPosts.ts` to use the API:

```typescript
export const fetchBlogPosts = async (sector?: string) => {
  const url = `https://yourdomain.com/api/blog.php${sector ? `?sector=${sector}` : ''}`;
  const response = await fetch(url);
  return response.json();
};

export const fetchBlogPost = async (id: number) => {
  const response = await fetch(`https://yourdomain.com/api/blog.php?action=single&id=${id}`);
  return response.json();
};
```

## Troubleshooting

### "DB connection failed"
- Check database credentials are correct
- Verify MySQL user has proper permissions
- Ensure database exists

### "Cannot POST/PUT/DELETE"
- Check if `.htaccess` mod_rewrite is enabled
- Look for 405 errors in logs
- Verify CORS headers are working

### "Table doesn't exist"
- Run `blog_schema.sql` in phpMyAdmin
- Verify table name matches in PHP code

### Missing POST/PUT/DELETE support
- Some shared hosting blocks these methods
- Contact Hostinger support to enable them
- Alternative: Use POST with action parameter

## Security Notes
⚠️ **Important**: This current implementation has security vulnerabilities:
- SQL injection risk in DELETE (use prepared statements)
- No authentication/authorization checks
- Direct environment variable access

**For production**, implement:
- User authentication (JWT tokens)
- Role-based access control
- Input validation on all fields
- Rate limiting
- Error logging without exposing details

## API Response Format

### Success Response
```json
{
  "id": 1,
  "title": "Blog Post Title",
  "slug": "blog-post-title",
  "content": "...",
  "published": true,
  "featured": false,
  "created_at": "2026-03-25 10:30:00",
  "updated_at": "2026-03-25 10:30:00"
}
```

### Error Response
```json
{
  "error": "Error message here"
}
```

## Support
For Hostinger-specific issues:
- Visit: https://support.hostinger.com/
- Contact: Hostinger Support Team
