import request from 'supertest';
import app from '../../app';

describe('Converter Middleware', () => {
  it('should return an error when amount value is not a number', async () => {
    const response = await request(app).get('/convert/notNumeric');

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('"Amount" value should be a number');
  });

  it('should return an error when amount value is less than or equal to zero', async () => {
    const response = await request(app).get('/convert/0');

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('"Amount" value must be greater than 0');
  });
});
