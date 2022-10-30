'use strict'
const paymentRepository = require('../../../data/repository/payment.repository')

const execute = async (payment) => {
  try {
    await insertPayment(payment)
  } catch (error) {
    throw error
  }
}

const insertPayment = async (payment) => {
  try {
    const result = await paymentRepository.insertPayment(payment)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
