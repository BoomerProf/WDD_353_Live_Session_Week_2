const letterCount = require('./letterCount');

describe('Testing Leter Count Modules', () => {
  test('Positive Test for Counting', () => {
    expect(letterCount('awesome', 'e')).toEqual(2);
  });

  test('Negative Test for Counting', () => {
    expect(letterCount('Hello', 'o')).not.toEqual(2);
  });
});
