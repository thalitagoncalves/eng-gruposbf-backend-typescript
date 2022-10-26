import dotenv from 'dotenv';
import app from './app';
import Logger from './utils/logger';

dotenv.config();

app.listen(process.env.PORT || 3003, () => {
  Logger.info(`Server is running on port ${process.env.PORT || 3003}`);
});
