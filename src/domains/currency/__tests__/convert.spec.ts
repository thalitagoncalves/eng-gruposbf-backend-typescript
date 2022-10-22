import convert from '../converter';

import getQuotationResultMock from '../__mocks__/get-quotation-result-mock';

jest.mock('../converter');

afterEach(() => {
  jest.clearAllMocks();
});

const mockConverter = convert as jest.Mock<any>;

const FakeGetQuotation = jest.fn().mockResolvedValue(getQuotationResultMock);

describe('Converter', () => {
  it('should be a function', async () => {
    expect(typeof convert).toBe('function');
  });

  it('should convert one currency value to other currencies', async () => {
    const FakeInput = {
      amount: '10',
    };

    const conversionResult = {
      ARS: '289.86',
      AUD: '3.00',
      CLP: '1832.17',
      EUR: '1.93',
      GBP: '1.68',
      INR: '156.79',
      MXN: '38.07',
      USD: '1.90',
    };

    mockConverter.mockImplementation(() => (conversionResult));

    await convert(FakeGetQuotation, FakeInput);

    expect(mockConverter).toHaveBeenCalledTimes(1);
    expect(mockConverter).toHaveBeenCalledWith(FakeGetQuotation, FakeInput);
    expect(convert(FakeGetQuotation, FakeInput)).toEqual(conversionResult);
  });
});
