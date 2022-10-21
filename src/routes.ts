import { Router } from 'express';
import CoinConvert from './domains/currency';
import convertMiddleware from './middleware';

const router = Router();

router.get('/convert/:amount', convertMiddleware, async (req, res) => {
  await CoinConvert.convert(res, { amount: req.params.amount });
});

export default router;
