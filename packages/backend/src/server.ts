import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import AppRouter from './routes';
import connectDB from './config/database';
import errorHandlerMiddleware from './middleware/error-handler.middleware';

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

app.use(errorHandlerMiddleware);

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
