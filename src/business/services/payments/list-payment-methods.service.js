'use strict'
const paymentRepository = require('../../../data/repository/payment.repository')
const { methodConverter } = require('../../converter/method.converter')

const execute = async () => {
  try {
    const methodsData = await listPaymentMethods()
    return methodsData.map((methodDetail) => methodConverter(methodDetail))
  } catch (error) {
    throw error
  }
}

const listPaymentMethods = async () => {
  try {
    const result = await paymentRepository.listPaymentMethods()
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
