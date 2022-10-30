'use strict'
const insertPayment = (payment) => {
  const orderId = payment.order.id
  const paymentMethod = payment.method.code
  const email = payment.employee.contact.email
  const tipAmount = payment.amount.tip
  const totalAmount = payment.amount.total_amount
  return {
    name: 'SP_INSERTAR_VENTA',
    statements: [
      `CALL SP_INSERTAR_VENTA(${orderId}, ${paymentMethod}, "${email}", ${tipAmount}, ${totalAmount});`
    ],
    values: []
  }
}
const listPaymentMethods = () => {
  return {
    name: 'SP_LISTAR_MEDIOS_DE_PAGO',
    statements: [`CALL SP_LISTAR_MEDIOS_DE_PAGO();`],
    values: []
  }
}

module.exports = { insertPayment, listPaymentMethods }
