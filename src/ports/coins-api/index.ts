import axios from 'axios';
import currencies from '../../config/currencies';

import { IQuotationApiResponse } from './types';

const currenciesCodes = Object.keys(currencies);
const pairs = currenciesCodes.map((coin) => `${coin}-BRL`);

const getQuotation = async (): Promise<IQuotationApiResponse | null> => {
  try {
    const response = await axios.get(`${process.env.URL}/last/${pairs}-BRL`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getQuotation;
