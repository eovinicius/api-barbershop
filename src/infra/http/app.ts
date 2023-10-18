import 'express-async-errors';
import Express from 'express';
import { routes } from './routes';
import { errorMiddleware } from './middlewares/error-middleware';

const app = Express();

app.use(Express.json());

app.use(routes);

app.use(errorMiddleware);

export default app;
