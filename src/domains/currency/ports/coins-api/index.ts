import axios from 'axios';
// import logger from '../../../../utils/logger';
import { IQuotationApiResponse } from './types';

const getQuotation = async (coins: string[]): Promise<IQuotationApiResponse | null> => {
  const pairs = coins.map((coin) => `${coin}-BRL`);
  try {
    const response = await axios.get(`${process.env.URL}/last/${pairs}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getQuotation;
