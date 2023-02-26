import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser = require('body-parser');
import { infoRouter } from './routes/info';
import { registrationRouter } from './routes/registration';
import { authenticationRouter } from './routes/authentication';
import { functionsRouter } from './routes/functions';
import { errorRouter } from './routes/error';
import { getAllRouter } from './routes/getAllRouter';

dotenv.config();
const uri = process.env.MONGO_URI || 'mongodb+srv://scladnik:McPaW5Cuovp7XWEq@mongodbcluster.t6wxcpr.mongodb.net/UsersDB?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8080;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch(error) {
    console.error(error);
  };
};

connect();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/registration', registrationRouter);
app.use('/authentication', authenticationRouter);
app.use('/info', infoRouter);
app.use('/functions', functionsRouter);
app.use('/getAll', getAllRouter);
app.use('*', errorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
