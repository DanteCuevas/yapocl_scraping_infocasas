const request = require('request')

module.exports = getProperties = async (operationTypeId, searchText) => {
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
        query: `query ResultsGird_v2($rows: Int!, $params: SearchParamsInput!, $page: Int, $source: Int) {
          searchFast(params: $params, first: $rows, page: $page, source: $source)
        }`,
        variables: {
          "rows": 21,
          "params": {
            "page": 1,
            "order": 2,
            "operation_type_id": operationTypeId,
            "m2Currency": 2,
            "searchstring": searchText
          },
          "page": 1,
          "source": 0
        }
      })
  };
  return new Promise((resolve, reject) => {
      request(options, (error, response) => {
          if (error) {
            reject(error)
          } else {
            const body = JSON.parse(response.body)
            resolve(body.data.searchFast)
          }
      })
  })
}
