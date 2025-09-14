import { TRPCError } from '@trpc/server';

const userRouter = createRouter()
    .query('getUser', {
        input: z.string(),
        resolve: async ({ input }) => {
            const user = await userService.getUser(input);
            if (!user) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `User with id ${input} not found`,
                });
            }
            return user;
        },
    });
