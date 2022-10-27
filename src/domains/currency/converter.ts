import { curry } from 'ramda';

import GetQuotation from '../../ports/coins-api/index';
import currencies from '../../config/currencies';

import { CurrencyResponse } from './types/types';
import { IQuotationApiResponse } from '../../ports/coins-api/types';

interface Input {
  amount: string
}

const codes = Object.keys(currencies);

function getRates(quotations: IQuotationApiResponse, input: Input): CurrencyResponse {
  const rates: CurrencyResponse = {};

  const numberAmount = Number(input.amount);

  codes.forEach((currencyCode) => {
    const parseCurrency = `${currencyCode}BRL`;
    const { code } = quotations[parseCurrency];

    const currencyValue = Number(quotations[parseCurrency].high);
    const conversion = (numberAmount / currencyValue).toFixed(2);

    rates[code] = conversion;
  });

  return rates;
}

async function convert(GetQuotationPort: typeof GetQuotation, input: Input) {
  const quotations = await GetQuotationPort();
  const rates = getRates(quotations, input);

  return rates;
}

export default curry(convert);
