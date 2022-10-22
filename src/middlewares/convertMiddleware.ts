import { Request, Response } from 'express';
import Logger from '../utils/logger';

const convertMiddleware = (req: Request, res: Response, next: any) => {
  const numberAmount = Number(req.params.amount);

  if (Number.isNaN(numberAmount)) {
    Logger.error({
      message: 'Client did not sent a numeric value',
      request: req.params.amount,
    });
    return res.status(400).send({
      message: '"Amount" value should be a number ',
    });
  }
  return next();
};

export default convertMiddleware;
