import request from 'supertest';
import app from '../app';

describe('GET FAILED', () => {
  it('should return an error when the route is not found', async () => {
    const response = await request(app).get('/convert/');

    expect(response.status).toBe(404);
    expect(response.text).toBe('Route not found');
  });
});
