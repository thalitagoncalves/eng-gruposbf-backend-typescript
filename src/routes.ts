import { Router } from 'express';
import CoinConvert from './domains/currency';

const router = Router();

router.get('/convert/:amount', async (req, res) => {
  await CoinConvert.convert(res, { amount: req.params.amount });
});

export default router;
