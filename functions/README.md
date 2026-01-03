# OnPlan Cloud Functions

Firebase Cloud Functions for the OnPlan platform backend.

## Getting Started

```bash
# Install dependencies
npm install

# Build functions
npm run build

# Run local emulator
npm run serve

# Deploy to Firebase
npm run deploy

# View logs
npm run logs
```

## Prerequisites

- Firebase CLI: `npm install -g firebase-tools`
- Firebase project configured

## Tech Stack

- Firebase Cloud Functions (2nd gen)
- TypeScript
- Node.js 18

## Project Structure

```
src/
├── index.ts      # Main entry point
├── api/          # HTTP callable functions
├── triggers/     # Event-triggered functions
└── utils/        # Helper utilities
```

## Environment Variables

Set up environment variables using:
```bash
firebase functions:config:set service.key="value"
```
