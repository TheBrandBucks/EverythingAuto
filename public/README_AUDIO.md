# Audio File Setup Instructions

## Required Audio File
You need to add a background music file named `audio.mp3` in this directory.

## Steps:
1. Get your background music file (MP3 format recommended)
2. Rename it to `audio.mp3`
3. Place it in the `Everything-Auto-WEB/public/` directory
4. The file will be automatically used by the background audio system

## File Requirements:
- Format: MP3 (recommended) or other web-compatible audio formats
- Name: Must be exactly `audio.mp3`
- Location: Must be in the `public` directory
- Size: Keep it reasonable (under 5MB recommended for web performance)

## What Happens:
- Audio will automatically play on all pages except Videos, Blog, and Reviews
- Audio will loop continuously
- Volume is set to 30% by default
- Audio will automatically pause when navigating to excluded pages
- Audio will resume when returning to allowed pages

## Troubleshooting:
- If audio doesn't play, check browser autoplay settings
- Make sure the file is named exactly `audio.mp3`
- Verify the file is in the correct directory
- Check browser console for any error messages
