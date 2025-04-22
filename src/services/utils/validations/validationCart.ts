import validator from 'validator';

export default function validationCart({
  address, thing, total, allowPurchase,
}: {
  address: Address | 'retirar' | null, thing: number | 'Não' | null, total: number, allowPurchase: boolean,
}) {
  if (!address) return 'selecione um endereço para entrega ou retirada!';

  if ((thing && !validator.isNumeric(`${thing}`)) && thing !== 'Não') {
    return 'Troco não é númerico!';
  }

  if (!thing) {
    return 'Selecione se vai precisar de troco!';
  }
  if ((thing && total && total >= <number>thing) && thing !== 'Não') {
    return `Troco precisa ser maior que R$${total.toFixed(2)}!`;
  }
  if (!allowPurchase) {
    return 'Seu carrinho está vazio!';
  }

  return '';
}
