import validator from 'validator';

export function validationAddress({
  cep, district, number, complement, street,
}: {
  cep: string,
  district: string,
  number: number,
  complement: string,
  street: string,
}) {
  if (!cep) return 'CEP é necessário';
  if (cep && !validator.isNumeric(cep.replace('-', ''))) {
    console.log(cep);
    return 'CEP inválido!';
  }
  if (cep && !validator.isLength(cep, { min: 8, max: 9 })) {
    return 'CEP deve ter 8 números!';
  }

  if (!district) return 'Bairro é necessário';
  if (district && !validator.isLength(district, { min: 3, max: 30 })) {
    return 'Bairro deve ter entre 3 e 30 caracteres!';
  }

  if (!street) return 'Rua/Avenida é necessário';
  if (street && !validator.isLength(street, { min: 3, max: 40 })) {
    return 'Rua/Avenida deve ter entre 3 e 40 caracteres!';
  }

  if (complement && !validator.isLength(complement, { max: 30 })) {
    return 'Complemento deve ter menos de 30 caracteres!';
  }

  return '';
}
