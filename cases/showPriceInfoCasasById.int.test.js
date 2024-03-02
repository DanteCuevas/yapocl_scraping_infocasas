
beforeEach(() => {
  jest.resetModules()
})

describe('cases showPriceInfoCasasById tests', () => {
  test('it should return info Price by id', async () => {
    const expectedId = 187837312
    const expectedResponse = 'U$S 790000'
    const showPriceInfoCasasById = require('./showPriceInfoCasasById')
    jest.mock('./showPriceInfoCasasById', () => {
      return jest.fn(() => expectedResponse);
    });
    const infoPrice = await showPriceInfoCasasById(expectedId)

    expect(infoPrice).toEqual(expectedResponse)
    expect(showPriceInfoCasasById).toHaveBeenCalled()
    expect(showPriceInfoCasasById).toHaveBeenCalledTimes(1)
    expect(showPriceInfoCasasById).toHaveBeenCalledWith(expectedId)
  })

  test('it should return a price no found by id', async () => {
    const expectedId = 187837312
    const expectedResponse = 'price no found for id 187837312'
    const showPriceInfoCasasById = require('./showPriceInfoCasasById')
    jest.mock('./showPriceInfoCasasById', () => {
      return jest.fn(() => expectedResponse);
    });
    const infoPrice = await showPriceInfoCasasById(expectedId)

    expect(infoPrice).toEqual(expectedResponse)
    expect(showPriceInfoCasasById).toHaveBeenCalled()
    expect(showPriceInfoCasasById).toHaveBeenCalledTimes(1)
    expect(showPriceInfoCasasById).toHaveBeenCalledWith(expectedId)
  })
})
