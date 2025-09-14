import express from 'express';
import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { appRouter } from './router';

const createContext = ({ req, res }: trpc.CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.create<Context>();

const app = express();

app.use('/trpc', t.createExpressMiddleware({ router: appRouter, createContext }));

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/trpc');
});
