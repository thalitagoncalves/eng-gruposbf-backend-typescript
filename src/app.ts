import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: true,
}));

app.use('/', router);

app.use((req, res) => {
  res.status(404).send('Route not found');
});

export default app;
