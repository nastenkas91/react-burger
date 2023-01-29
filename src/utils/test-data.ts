export const ingredient1 = {
  "_id":"60d3b41abdacab0026a733d4",
  "name":"Сыр с астероидной плесенью",
  "type":"main",
  "proteins":84,
  "fat":48,
  "carbohydrates":420,
  "calories":3377,
  "price":4142,
  "image":"https://code.s3.yandex.net/react/code/cheese.png"
};

export const ingredient2 = {
  "_id": "60d3b41abdacab0026a733c8",
  "name": "Филе Люминесцентного тетраодонтимформа",
  "type": "main",
  "proteins": 44,
  "fat": 26,
  "carbohydrates": 85,
  "calories": 643,
  "price": 988,
  "image": "https://code.s3.yandex.net/react/code/meat-03.png"
};

export const bun = {
  "_id":"60d3b41abdacab0026a733c6",
  "name":"Краторная булка N-200i",
  "type":"bun",
  "proteins":80,
  "fat":24,
  "carbohydrates":53,
  "calories":420,
  "price":1255,
  "image":"https://code.s3.yandex.net/react/code/bun-02.png"
};

export const testOrder = {
  "success":true,
  "orders":[
    {"_id":"63cbe9ee936b17001be52a36",
      "ingredients":["60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733ce"],
      "owner":"6356dd7a9b518a001bb7707e",
      "status":"done",
      "name":"Люминесцентный традиционный-галактический краторный бургер",
      "createdAt":"2023-01-21T13:34:38.364Z",
      "updatedAt":"2023-01-21T13:34:38.804Z",
      "number":37440
    }
  ]};