# OnPlan Shared Types

Shared TypeScript types and Zod schemas used across the OnPlan platform.

## Getting Started

```bash
# Install dependencies
npm install

# Build types
npm run build

# Build with watch mode
npm run build:watch

# Type check
npm run type-check
```

## Usage

Import types in other packages:

```typescript
import { TaskSchema, type Task } from '@onplan/types';

// Validate data
const task = TaskSchema.parse(data);

// Use TypeScript types
function createTask(task: Task) {
  // ...
}
```

## Tech Stack

- TypeScript
- Zod for runtime validation

## Project Structure

```
src/
├── index.ts      # Main exports
├── schemas/      # Zod schemas
├── types/        # TypeScript type definitions
└── validators/   # Custom validators
```
