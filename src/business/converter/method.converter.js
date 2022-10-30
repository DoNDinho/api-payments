'use strict'
const methodConverter = (methodData) => {
  return {
    code: methodData.ID_MEDIO_PAGO,
    name: methodData.DESCRIPCION
  }
}

module.exports = { methodConverter }
