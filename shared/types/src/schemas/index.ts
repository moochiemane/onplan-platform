import { z } from 'zod';

// User schema
export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  createdAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

// Task schema
export const TaskSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  status: z.enum(['pending', 'in_progress', 'completed']),
  scheduledAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;

// Plan schema
export const PlanSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  tasks: z.array(z.string()), // Task IDs
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Plan = z.infer<typeof PlanSchema>;
