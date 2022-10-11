
'use strict';

let logger = require('../middleware/logger');

describe('Test Logger Middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on the next method

  beforeEach(() => {
    // Attach to the console (spy on it or take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    // put things back to normal.  stop spying
    consoleSpy.mockRestore();
  });

  test('Properly calls next()', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});