const showPriceInfoCasasById = require('./cases/showPriceInfoCasasById')

const execute = async () => {
  const propertyId = parseInt(process.argv[2])
  const infoPrice = await showPriceInfoCasasById(propertyId)
  console.log('################################################')
  console.log('################################################')
  console.log(infoPrice)
}

execute()
