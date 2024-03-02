const { operationTypeId } = require('../enums/property.enum')

beforeEach(() => {
  jest.resetModules()
})

describe('services get properties tests', () => {
  test('it should return array of properties by title and operationTypeId', async () => {
    const expectedTitle = 'APARTAMENTO EN ALQUILER_MINAS,LAVALLEJA'
    const expectedProperties = [
      {
        "id": 190895639,
        "legacy_propID": 190895639,
        "isProject": false,
        "title": "APARTAMENTO EN ALQUILER_MINAS,LAVALLEJA",
        "description": "Este enriquecedor apartamento de 2 dormitorios y 1 baño se encuentra ubicado en la pintoresca ciudad de Minas, Lavalleja. Con una superficie de 58 m2, esta propiedad recién construida ofrece un espacio moderno y funcional para aquellos que buscan una vivienda cómoda y actualizada. El apartamento cuenta con amenidades de",
        "address": "25 DE MAYO 643",
        "showAddress": 1,
        "operation_type_id": 2,
        "property_type_id": 2,
        "highlight": 10,
        "img": "https://cdn2.infocasas.com.uy/repo/img/a820311a028f9d96f83fcdb4ca1fbe7a2de60687.jpg",
        "isExternal": false,
        "link": "/apartamento-en-alquiler-minaslavalleja/190895639",
        "bedrooms": 2,
        "rooms": 3,
        "bathrooms": 1,
        "guests": null,
        "m2": 58,
        "seaDistanceName": null,
        "neighborhood": "Minas",
        "estate": "Lavalleja",
        "facilities": [
            "1",
            "4",
            "14",
            "15",
            "20",
            "21",
            "29",
            "34",
            "36",
            "78",
            "218"
        ],
        "price": 25000,
        "currency": "$",
        "currency_id": 2,
        "hidePrice": false,
        "commonExpenses": 2860,
        "commonExpenses_currency": "$",
        "tour3d": "",
        "owner": {
            "id": 173878564,
            "logo": "https://cdn1.infocasas.com.uy/repo/img/650471d68e800_whatsapp-image-2023-09-15-at-11.51.56.jpeg",
            "name": "Andrea Anguiano Estudio Inmobiliario ",
            "inmoLink": null,
            "inmoPropsLink": "/inmobiliarias/173878564-andrea-anguiano-estudio-inmobiliario-/propiedades",
            "inmofull": false,
            "whatsappPhone": "59899719620"
        },
        "event": {
            "show": false,
            "fecha_inicio_evento": "",
            "link": "",
            "logo": "",
            "tag": ""
        }
      }
    ]
    const getProperties = require('./get.properties.service')
    jest.mock('../services/get.properties.service', () => {
      return jest.fn(() => expectedProperties);
    });
    const properties = await getProperties(operationTypeId.SALE, expectedTitle)

    expect(properties).toEqual(expectedProperties)
    expect(getProperties).toHaveBeenCalled()
    expect(getProperties).toHaveBeenCalledTimes(1)
    expect(getProperties).toHaveBeenCalledWith(operationTypeId.SALE, expectedTitle)
  })
})
