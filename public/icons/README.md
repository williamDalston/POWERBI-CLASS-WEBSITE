# PWA Icons

This directory should contain app icons for the Progressive Web App (PWA).

## Required Icon Sizes

The following icons need to be generated for a complete PWA setup:

- `icon-72x72.png` - 72x72px
- `icon-96x96.png` - 96x96px
- `icon-128x128.png` - 128x128px
- `icon-144x144.png` - 144x144px
- `icon-152x152.png` - 152x152px
- `icon-192x192.png` - 192x192px (most important)
- `icon-384x384.png` - 384x384px
- `icon-512x512.png` - 512x512px (Android)

## Icon Design Guidelines

1. **Background**: Use brand color `#082434` (primary-900)
2. **Design**: Power BI related icon or "PB" monogram
3. **Style**: Clean, modern, recognizable at small sizes
4. **Format**: PNG with transparency preferred

## Quick Generation

You can use online tools to generate these icons:
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator
- https://tools.crawlink.com/tools/pwa-icon-generator

Or use the provided design in `icon-template.svg` and convert to all required sizes.

## Maskable Icons

All icons should be maskable for optimal display on all devices. The safe zone for important content is the center 80% of the icon.

## Current Status

⚠️ **Icons need to be generated** - The manifest.json references these icons, but they don't exist yet. Create them before deploying to production.

