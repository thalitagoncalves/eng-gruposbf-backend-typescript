import { curry } from 'ramda';
import { Response } from 'express';

import Logger from '../../utils/logger';
import GetQuotation from './ports/coins-api/index';
import currencies from '../../config/currencies';

import { CurrencyResponse } from './types';
import { IQuotationApiResponse } from './ports/coins-api/types';

interface Input {
  amount: string
}

const codes = Object.keys(currencies);

async function convert(
  GetQuotationPort: typeof GetQuotation,
  LoggerPort: typeof Logger,
  res: Response,
  input: Input,
) {
  const numberAmount = Number(input.amount);

  try {
    const quotations = await GetQuotationPort();
    const response: CurrencyResponse = {};

    codes.forEach((currencyCode) => {
      const parseCurrency = `${currencyCode}BRL`;
      const { code } = quotations[parseCurrency];

      const currencyValue = Number(quotations[parseCurrency].high);
      const conversion = (numberAmount / currencyValue).toFixed(2);

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

    return res.status(400).send({
      error: error.message,
    });
  }
}

export default curry(convert);
