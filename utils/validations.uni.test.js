const { isNumeric } = require('../utils/validations')

describe('utils validations tests', () => {
  test('it should return true with a valid number', () => {
    const res = isNumeric(100)
    expect(res).toBe(true);
  })

  test('it should return false with a negative number', () => {
    const res = isNumeric(-100)
    expect(res).toBe(false);
  })

  test('it should return false with a string', () => {
    const res = isNumeric('string')
    expect(res).toBe(false);
  })

  test('it should return false with a number concat with string', () => {
    const res = isNumeric('100string')
    expect(res).toBe(false);
  })
})