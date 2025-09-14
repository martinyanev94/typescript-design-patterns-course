// userService.ts
import { z } from 'zod';
import { User } from './models/user';

const userService = {
    getUser: async (id: string): Promise<User> => {
        // Simulated database call
        const user = await database.users.findOne({ where: { id } });
        if (!user) throw new Error("User not found");
        return user;
    },
    createUser: async (data: z.infer<typeof createUserSchema>): Promise<User> => {
        // Simulate creation logic
        const newUser = await database.users.create({ data });
        return newUser;
    }
};

export default userService;
