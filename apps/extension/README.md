# OnPlan Chrome Extension

Chrome extension (Manifest V3) for capturing tasks and integrating with the OnPlan platform.

## Getting Started

```bash
# Install dependencies
npm install

# Build for development (with watch mode)
npm run dev

# Build for production
npm run build

# Type check
npm run type-check
```

## Loading the Extension

1. Build the extension using `npm run build`
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `dist` folder

## Tech Stack

- TypeScript
- Chrome Extension Manifest V3
- Webpack

## Project Structure

```
src/
├── background/   # Service worker scripts
├── content/      # Content scripts
├── popup/        # Extension popup UI
└── utils/        # Shared utilities
public/
└── icons/        # Extension icons
```
