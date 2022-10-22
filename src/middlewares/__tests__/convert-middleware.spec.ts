import convertMiddleware from '../convertMiddleware';

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock('../middleware');

const mockConverterMiddleware = convertMiddleware as jest.Mock<any>;

const createReq = (extra: any) => {
  const req = {
    params: {},
    ...extra,
  };
  return req;
};

const createRes = () => {
  const res: any = {
    status: jest.fn(() => res),
    send: jest.fn(() => res),
  };
  return res;
};

const FakeNext = jest.fn();

describe('Converter Middleware', () => {
  it('should return an error when amount value is not a number', () => {
    const FakeAmount = 'notNumeric';

    const FakeReq = createReq({ params: FakeAmount });
    const FakeRes = createRes();

    convertMiddleware(FakeReq, FakeRes, FakeNext);

    expect(mockConverterMiddleware).toHaveBeenCalledTimes(1);
    expect(mockConverterMiddleware).toHaveBeenCalledWith(FakeReq, FakeRes, FakeNext);
  });
});
