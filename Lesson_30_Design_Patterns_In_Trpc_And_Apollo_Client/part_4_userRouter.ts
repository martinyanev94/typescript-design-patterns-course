import { createRouter } from '@trpc/server';
import userService from './userService';

const userRouter = createRouter()
    .query('getUser', {
        input: z.string(),
        resolve: async ({ input }) => {
            return userService.getUser(input);
        },
    })
    .mutation('createUser', {
        input: createUserSchema,
        resolve: async ({ input }) => {
            return userService.createUser(input);
        },
    });
