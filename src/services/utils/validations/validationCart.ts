import validator from 'validator';

export default function validationCart({ address, thing, total }: {
  address: Address | 'retirar' | null, thing?: number, total: number,
}) {
  if (!address) return 'selecione um endereço para entrega ou retirada!';

  if (thing && !validator.isNumeric(`${thing}`)) {
    return 'Troco não é númerico!';
  }
  if (thing && total && total >= thing) {
    return `Troco precisa ser maior que R$${total.toFixed(2)}!`;
  }

  return '';
}
