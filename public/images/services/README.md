# Service Images

This directory contains images for the service detail pages.

## Required Images

Place the following images in this directory:

- `web-dev.jpg` - Web Development service image (recommended: 1200x800px)
- `maintenance.jpg` - Web Maintenance service image (recommended: 1200x800px)
- `ui-ux.jpg` - UI/UX Design service image (recommended: 1200x800px)
- `custom-systems.jpg` - Custom Systems Development service image (recommended: 1200x800px)
- `hosting.jpg` - Domain & Hosting Solutions service image (recommended: 1200x800px)

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Dimensions**: 1200x800px (3:2 aspect ratio recommended)
- **File Size**: Keep under 500KB for optimal performance
- **Optimization**: Use tools like TinyPNG or ImageOptim to compress images

## Temporary Placeholders

Currently, the service pages use Unsplash URLs as placeholders. You can:
1. Use your own custom images by placing them in this directory
2. Keep using the Unsplash placeholders (they work but may have rate limits)
3. Generate placeholder images using services like:
   - https://placeholder.com
   - https://picsum.photos
   - https://unsplash.com (for free stock photos)

## Updating Image Paths

After adding your images here, the paths in `/lib/services.ts` are already configured to use:
```
/images/services/[image-name].jpg
```

The Next.js Image component will automatically optimize these images.

