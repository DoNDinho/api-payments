const express = require('express')
const insertPaymentService = require('../../business/services/payments/insert-payment.service')
const listMethodsService = require('../../business/services/payments/list-payment-methods.service')
const router = express.Router()

router.post(`/Payments/v1/payments`, async (req, res, next) => {
  try {
    await insertPaymentService.execute(req.body.payment)
    const message = 'Pago insertado con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(201).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.get(`/Payments/v1/methods`, async (req, res, next) => {
  try {
    const methods = await listMethodsService.execute()
    const message = 'Metodos de pago obtenidos con exito'
    const response = { payment_methods: methods }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(200).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

module.exports = router
