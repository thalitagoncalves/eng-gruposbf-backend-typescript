import { Router } from 'express';
import CoinConvert from './domains/currency';
import convertMiddleware from './middlewares/convertMiddleware';
import Logger from './utils/logger';

const router = Router();

router.get('/convert/:amount', convertMiddleware, async (req, res) => {
  try {
    const conversion = await CoinConvert.convert({ amount: req.params.amount });
    Logger.info({
      message: 'Conversion successfully',
      amount: req.params.amount,
      conversion,
    });
    res.status(200).send({ data: conversion });
  } catch (error) {
    Logger.error(error);
    res.status(400).send({
      message: 'Error completing conversion',
    });
  }
});

export default router;
