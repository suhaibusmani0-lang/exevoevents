# Hostinger Deployment Guide for Exevo Events Website

## 🚀 Deployment Methods

### Method 1: File Manager (Recommended)

1. **Login to Hostinger hPanel**
   - Go to hostinger.com → Login
   - Access your hosting control panel

2. **Open File Manager**
   - Click "File Manager" in hPanel
   - Navigate to `public_html` folder

3. **Clean the directory**
   - Delete all existing files in `public_html`
   - This ensures a fresh deployment

4. **Upload files**
   - Upload ALL contents from the `dist` folder to `public_html`
   - Include all subfolders: assets/, images/, exevo-uploads/

### Method 2: FTP Deployment

#### FTP Settings (get these from Hostinger):
- **Host**: Your domain or IP (e.g., ftp.yourdomain.com)
- **Username**: Your FTP username
- **Password**: Your FTP password
- **Port**: 21 (or 22 for SFTP)

#### Recommended FTP Clients:
- FileZilla (Free)
- WinSCP (Windows)
- Cyberduck (Mac/Windows)

#### FTP Steps:
1. Connect to your FTP server
2. Navigate to `public_html` folder
3. Delete existing files
4. Upload all files from `dist` folder

## 📋 Pre-Deployment Checklist

- [ ] Project built successfully (`npm run build`)
- [ ] All images and assets are in the correct paths
- [ ] Contact form is configured properly
- [ ] Domain is pointed to Hostinger servers
- [ ] SSL certificate is enabled in Hostinger

## 🔧 Post-Deployment Configuration

### 1. Configure URL Redirects
Since this is a React SPA, you need to handle client-side routing.

Create a `.htaccess` file in your `public_html` folder:

```apache
RewriteEngine On
RewriteBase /

# Handle Angular and React Router
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 2. SSL Certificate
- Enable SSL in Hostinger hPanel
- Force HTTPS redirects

### 3. Domain Configuration
- Ensure your domain DNS is pointing to Hostinger
- Wait for DNS propagation (up to 24 hours)

## 🐛 Troubleshooting

### Common Issues:

1. **404 Errors on page refresh**
   - Solution: Add the `.htaccess` file above

2. **Images not loading**
   - Check if all image paths are correct
   - Ensure images folder is uploaded

3. **Contact form not working**
   - Verify FormSubmit.co email verification
   - Check browser console for errors

4. **White screen**
   - Check browser console for JavaScript errors
   - Verify all files were uploaded correctly

5. **CSS not loading**
   - Check if assets folder was uploaded
   - Verify file permissions (755 for folders, 644 for files)

## 📞 Support Contacts

- **Hostinger Support**: Available 24/7 via live chat
- **Domain Issues**: Check DNS settings in Hostinger
- **Technical Issues**: Check browser developer console

## 🔄 Future Updates

To update your website:
1. Make changes to your code
2. Run `npm run build`
3. Upload new `dist` contents to `public_html`
4. Clear browser cache

## 📈 Performance Optimization

- Enable Gzip compression in Hostinger
- Use Cloudflare (free) for CDN
- Optimize images before uploading
- Enable browser caching with .htaccess

---

**Need help?** Contact Hostinger support or check their knowledge base for hosting-specific issues. 