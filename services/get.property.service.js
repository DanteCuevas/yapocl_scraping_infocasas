const request = require('request')

module.exports = getProperty = async (id) => {
  const options = {
      'method': 'POST',
      'url': 'https://graph.infocasas.com.uy/graphql',
      'headers': {
        'Content-Type': 'application/json',
        'X-Origin': 'www.infocasas.com.uy',
        'X-Cookiepot': '3',
        'Cookie': 'cookiepot=3'
      },
      body: JSON.stringify({
        query: `query findProperty($propertyId: ID!) {
          property(id: $propertyId) {
            id
            title
            link
            m2
            active
            price_amount_usd
            address
          }
        }`,
        variables: {
          "propertyId": id
        }
      })
  };
  return new Promise((resolve, reject) => {
      request(options, (error, response) => {
          if (error) {
            reject(error)
          } else {
            const body = JSON.parse(response.body)
            console.log('getProperty: ', body.data);
            resolve(body.data.property)
          }
      })
  })
}