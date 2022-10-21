import { Request, Response } from 'express';

const convertMiddleware = (req: Request, res: Response, next: any) => {
  const numberAmount = Number(req.params.amount);

  if (Number.isNaN(numberAmount)) {
    return res.status(400).send({
      message: 'Amount" value should be a number',
    });
  }
  return next();
};

export default convertMiddleware;
