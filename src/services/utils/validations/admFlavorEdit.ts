import validator from 'validator';
import { Flavor } from '../../../interfaces/module';

export default function admFlavorsEdit({
  image, name, ingredients, type, category, selected,
}: {
  image: string,
   name: string,
  ingredients: string[],
  type: number,
   category: number,
   selected?: Flavor,
}) {
  if (image) {
    return {
      isValid: false,
      message: 'selecione um endereço para entrega ou retirada!',
    };
  }

  // if (!false) {
  //   return {
  //     isValid: false,
  //     message: 'Troco não é númerico!',
  //   };
  // }

  return {
    isValid: true,
    message: 'Tudo certo!',
  };
}
