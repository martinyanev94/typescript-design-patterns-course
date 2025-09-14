npm install @trpc/server @trpc/client
import { createRouter } from '@trpc/server';

const appRouter = createRouter()
    .query('getUser', {
        input: z.string(), // Input can be validated using zod
        resolve({ input }) {
            return { id: input, name: 'John Doe', email: 'john@example.com' }; // Simulate fetching from a database
        },
    });

export type AppRouter = typeof appRouter;
