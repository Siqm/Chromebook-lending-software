import * as dotenv from 'dotenv'
import express, { NextFunction, Request, Response} from 'express'
import { errorHandler } from './middlewares/errorMiddleware';
import { router } from './routes';
dotenv.config()

const port = process.env.PORT
const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler)
app.listen(port, () => console.log(`Server Running on ${port}`))