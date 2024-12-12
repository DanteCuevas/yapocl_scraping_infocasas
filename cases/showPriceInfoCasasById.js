const getProperty = require('../services/get.property.service')
const getProperties = require('../services/get.properties.service')
const { operationTypeId } = require('../enums/property.enum')
const { isNumeric } = require('../utils/validations')

const getDetailProperty = async (title, propertyId) => {
  const allProperties = await Promise.all([
    getProperties(operationTypeId.SALE, title),
    getProperties(operationTypeId.RENT, title),
    getProperties(operationTypeId.TEMPORARY_RENTAL, title)
  ]);
  const properties = allProperties.map(property => property.data)
    .reduce((a, b) => a.concat(b))
    .map(property => {
      return {
        id: property.id,
        price: property.price,
        currency: property.currency
      }
    })
  return properties.find(property => propertyId === property.id)
}

module.exports = showPriceInfoCasasById = async (propertyId) => {
  if (!isNumeric(propertyId)) {
    return 'The argument id is not a number'
  }
  const property = await getProperty(propertyId)
  if (!property) {
    return `price no found for id ${propertyId}`
  }
  const detailProperty = await getDetailProperty(property.title, propertyId)
  console.log('detailProperty: ', detailProperty)
  return `${detailProperty.currency} ${detailProperty.price}`
}
