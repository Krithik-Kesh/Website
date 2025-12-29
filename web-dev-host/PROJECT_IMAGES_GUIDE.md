# 📸 How to Add Project Images

## Quick Steps:

### 1. **Prepare Your Images**
- Save your project screenshots/images with descriptive names
- Recommended formats: `.jpg`, `.jpeg`, or `.png`
- Recommended size: 800x600 pixels or larger (will be auto-resized)

### 2. **Place Images in Public Folder**
Put your images in the `public` folder:
```
web-dev-host/
  public/
    portfolio-project.jpg
    travel-path-project.jpg
    frequent-flyers-project.jpg
    in-motion-project.jpg
```

### 3. **Update Image Paths in Projects.jsx**
The component is already set up to use these paths:
- `/portfolio-project.jpg`
- `/travel-path-project.jpg`
- `/frequent-flyers-project.jpg`
- `/in-motion-project.jpg`

Just make sure your image filenames match!

## File Naming Tips:

You can name your images anything you want, just update the path in `Projects.jsx`:

```jsx
{
  title: 'My Project',
  image: '/my-custom-image-name.jpg', // ← Update this to match your filename
  // ...
}
```

## Image Path Rules:

- ✅ **Files in `public/` folder**: Use `/filename.jpg`
- ✅ **External URLs**: Use full URL like `https://example.com/image.jpg`
- ❌ **Don't use**: `./image.jpg` or `../image.jpg`

## Examples:

### Using Local Images (Recommended):
```jsx
image: '/portfolio-project.jpg'  // File in public/portfolio-project.jpg
```

### Using External URLs:
```jsx
image: 'https://images.unsplash.com/photo-1234567890'  // Direct image URL
```

### Using Images from a CDN:
```jsx
image: 'https://cdn.example.com/my-image.jpg'
```

## Quick Checklist:

1. [ ] Images saved in `public/` folder
2. [ ] Image filenames match the paths in `Projects.jsx`
3. [ ] File extensions are correct (.jpg, .png, etc.)
4. [ ] Saved Projects.jsx after updating paths
5. [ ] Refreshed browser (hard refresh: Cmd+Shift+R)

## Troubleshooting:

**Image not showing?**
- Check the filename matches exactly (case-sensitive!)
- Make sure the image is in the `public/` folder
- Hard refresh browser (Cmd+Shift+R)
- Check browser console (F12) for errors

**Image looks blurry?**
- Use higher resolution images (800x600 or larger)
- The component will scale them automatically

**Want different images per project?**
- Just change the `image` property in the projects array
- Use any filename you want, just update both the file and the code

