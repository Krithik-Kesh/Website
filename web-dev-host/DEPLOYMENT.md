# Deployment Guide - Connecting Your Portfolio to a Domain

This guide will walk you through deploying your portfolio website and connecting it to a custom domain.

## Option 1: Vercel (Recommended - Easiest & Free)

### Steps:

1. **Install Vercel CLI** (optional, or use the web interface):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   cd web-dev-host
   vercel
   ```
   - Follow the prompts
   - Your site will be live instantly with a `.vercel.app` URL

3. **Or Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite and configures everything

4. **Connect Your Domain**:
   - In Vercel dashboard, go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter your domain name (e.g., `yourname.com`)
   - Follow DNS configuration instructions:
     - Add an A record: `@` → Vercel's IP (provided)
     - Or add a CNAME: `www` → `cname.vercel-dns.com`
   - Wait for DNS propagation (5 minutes to 48 hours)

5. **SSL Certificate**:
   - Vercel automatically provides free SSL certificates (HTTPS)
   - Activated once domain is verified

---

## Option 2: Netlify (Also Great & Free)

### Steps:

1. **Deploy via Drag & Drop**:
   ```bash
   cd web-dev-host
   npm run build
   ```
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder onto Netlify

2. **Or Deploy via GitHub**:
   - Push your code to GitHub
   - Go to Netlify → "Add new site" → "Import an existing project"
   - Connect GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Connect Your Domain**:
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain
   - Configure DNS:
     - For root domain: Add A record `@` → Netlify's IP
     - For subdomain: Add CNAME `www` → your-site.netlify.app
   - SSL is automatic after DNS verification

---

## Option 3: GitHub Pages (Free)

### Steps:

1. **Update vite.config.js** to set base path:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Custom domain can be added in Pages settings

---

## DNS Configuration (For All Platforms)

### If you own a domain:

1. **Log into your domain registrar** (GoDaddy, Namecheap, Google Domains, etc.)

2. **Find DNS Management** section

3. **For Root Domain (yourname.com)**:
   ```
   Type: A
   Name: @
   Value: [IP provided by hosting platform]
   TTL: 3600
   ```

4. **For WWW Subdomain (www.yourname.com)**:
   ```
   Type: CNAME
   Name: www
   Value: [provided by hosting platform]
   TTL: 3600
   ```

### Common DNS Providers:
- **Cloudflare** (Free, fast DNS, includes CDN)
- **Google Domains**
- **Namecheap**
- **GoDaddy**

---

## Recommended: Cloudflare (Free CDN & DNS)

1. **Sign up at cloudflare.com**
2. **Add your site** to Cloudflare
3. **Change nameservers** at your domain registrar to Cloudflare's
4. **Add DNS records**:
   - A record: `@` → hosting platform IP
   - CNAME: `www` → hosting platform CNAME
5. **Enable SSL/TLS** → Full (strict)

Benefits:
- Free SSL certificate
- CDN (faster loading worldwide)
- DDoS protection
- Better performance

---

## Quick Start (Fastest Method)

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to vercel.com
   - Import GitHub repository
   - Done! You get a free `.vercel.app` URL

3. **Add custom domain**:
   - In Vercel dashboard → Settings → Domains
   - Add your domain
   - Update DNS at your registrar
   - Wait for verification

---

## Testing Locally Before Deploying

```bash
cd web-dev-host
npm run build
npm run preview
```

This lets you test the production build locally.

---

## Environment Variables (If Needed)

If you add features requiring API keys:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- DNS Checker: https://www.whatsmydns.net

Your portfolio is ready to go live! 🚀

