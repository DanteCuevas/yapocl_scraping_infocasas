
beforeEach(() => {
  jest.resetModules()
})

describe('services get property tests', () => {
  test('it should return property data by id', async () => {
    const expectedId = 187837312
    const expectedProperty = {
      "id": "187837312",
      "title": "Casa Única Amoblada En Corazón De Carrasco ",
      "link": "casa-nica-amoblada-en-corazn-de-carrasco/187837312",
      "m2": 388,
      "active": true,
      "price_amount_usd": 0,
      "address": "Puntas Santisgo"
    }
    const getProperty = require('../services/get.property.service')
    jest.mock('../services/get.property.service', () => {
      return jest.fn(() => expectedProperty);
    });
    const property = await getProperty(expectedId)

    expect(property).toEqual(expectedProperty)
    expect(getProperty).toHaveBeenCalled()
    expect(getProperty).toHaveBeenCalledTimes(1)
    expect(getProperty).toHaveBeenCalledWith(expectedId)
  })
})
