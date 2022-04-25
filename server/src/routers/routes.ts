import type { Express } from 'express';
import { router as storageRouter } from './storage';

export const initRoutes = (app: Express) => {
    app.use('/storage', storageRouter);
}