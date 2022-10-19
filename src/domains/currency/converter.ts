import { curry } from 'ramda';
import Logger from '../../utils/logger';
import GetQuotation from './ports/coins-api/index';

import { CurrencyResponse } from './types';

interface Input {
  amount: string
}

async function convert(
  GetQuotationPort: typeof GetQuotation,
  LoggerPort: typeof Logger,
  res: any,
  input: Input,
) {
  const coinCodes = ['EUR', 'USD', 'INR'];

  try {
    const quotations = await GetQuotationPort(coinCodes);
    const response: CurrencyResponse = {};

    coinCodes.forEach((coinCode) => {
      const parseCurrency = `${coinCode}BRL`;
      const { code } = quotations[parseCurrency];

      const currencyValue = Number(quotations[parseCurrency].high);
      const conversion = (Number(input.amount) / currencyValue).toFixed(2);

      response[code] = conversion;
    });

    LoggerPort.info({
      message: 'Conversion successfully',
      amount: input.amount,
      conversion: response,
    });

    return res.status(200).send({
      data: response,
    });
  } catch (error) {
    LoggerPort.error(error);

    return res.status(404).send({
      error: error.message,
    });
  }
}

export default curry(convert);
