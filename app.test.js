const dotenv = require('dotenv');

describe('Environment Variables', () => {
  test('API URL should be defined', () => {
    dotenv.config();
    const apiUrl = process.env.API_URL;
    expect(apiUrl).toBeDefined();
  });

  test('API URL should match expected value', () => {
    dotenv.config();
    const apiUrl = process.env.API_URL;
    expect(apiUrl).toBe('http://example.com/api');
  });
});
