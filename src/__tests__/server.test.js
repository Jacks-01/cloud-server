'use strict';
const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {
    
  it('handles invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/person?name=');

    expect(response.status).toEqual(500);
    // ? Not sure if this should work or not since validator is the one returning the message
    expect(response.text).toEqual('SERVER ERROR');

  }); 
    
  it('handles /person route without query param correctly', async () => {
    const response = await request.get('/person').query({ name: 'jack' });

    expect(response.body).toEqual({name: 'jack'});
  });
});