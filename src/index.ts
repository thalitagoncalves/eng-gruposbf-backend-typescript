import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';

dotenv.config();

app.listen(process.env.PORT || 3003, () => {
  logger.info(`Server is running on port ${process.env.PORT || 3003}`);
});
