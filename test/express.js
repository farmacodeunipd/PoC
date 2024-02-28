test('Express API Test', async () => {
    const response = await fetch('http://localhost:3080');
    expect(response.status).toBe(200);
  });