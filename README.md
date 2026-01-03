# OnPlan Platform

OnPlan is a platform that turns AI-generated plans into scheduled, trackable actions with calendar integration.

## 🏗️ Monorepo Structure

```
onplan-platform/
├── apps/
│   ├── web/              # Next.js web application
│   └── extension/        # Chrome Extension (Manifest V3)
├── functions/            # Firebase Cloud Functions
├── shared/
│   └── types/           # Shared TypeScript types and Zod schemas
└── package.json         # Root workspace configuration
```

## 📦 Packages

### apps/web
Next.js 14 web application with TypeScript and React 18.

- **Location:** `apps/web/`
- **Tech Stack:** Next.js, React, TypeScript
- **Start:** `npm run dev:web`

### apps/extension
Chrome Extension (Manifest V3) for capturing tasks and integrating with the platform.

- **Location:** `apps/extension/`
- **Tech Stack:** TypeScript, Webpack, Chrome Extension API
- **Build:** `npm run build:extension`

### functions
Firebase Cloud Functions for backend services.

- **Location:** `functions/`
- **Tech Stack:** Firebase Functions, TypeScript, Node.js 18
- **Build:** `npm run build:functions`

### shared/types
Shared TypeScript types and Zod schemas used across all packages.

- **Location:** `shared/types/`
- **Tech Stack:** TypeScript, Zod
- **Build:** `cd shared/types && npm run build`

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher
- Firebase CLI (for functions): `npm install -g firebase-tools`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/moochiemane/onplan-platform.git
   cd onplan-platform
   ```

2. Install dependencies for all workspaces:
   ```bash
   npm install
   ```

### Development

Run the Next.js web app:
```bash
npm run dev:web
```

Build the Chrome extension:
```bash
npm run build:extension
```

Build Firebase functions:
```bash
npm run build:functions
```

Build all packages:
```bash
npm run build
```

## 📝 Individual Package Documentation

Each package has its own README with detailed setup and usage instructions:

- [Web App](./apps/web/README.md)
- [Chrome Extension](./apps/extension/README.md)
- [Cloud Functions](./functions/README.md)
- [Shared Types](./shared/types/README.md)

## 🛠️ Development Workflow

1. Make changes in the respective package directory
2. Build shared types if modified: `cd shared/types && npm run build`
3. Run tests and builds for affected packages
4. Commit changes following conventional commits

## 📄 License

MIT
