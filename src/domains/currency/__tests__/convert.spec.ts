import convert from '../converter';

const FakeLogger = {
  info: jest.fn(),
  error: jest.fn(),
};

const FakeGetQuotation = jest.fn();

describe('Convert a given amount from one currency to another', () => {
  it('should be a function', () => {
    expect(typeof convert).toBe('function');
  });
});
