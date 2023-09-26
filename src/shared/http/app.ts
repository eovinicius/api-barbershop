import 'express-async-errors';
import Express from 'express';
import { errorMiddleware } from './../http/middlewares/errorMiddleware';
import { routes } from './routes';

const app = Express();

app.use(Express.json());

app.use(routes);

app.use(errorMiddleware);

export default app;
