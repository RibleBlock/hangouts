// import validator from 'validator';
import { Flavor } from '../../../interfaces/module';

export function admFlavorsEdit({
  image, name, ingredients, type, category, selected,
}: {
  image: string,
  name: string,
  ingredients: string[],
  type: string,
  category: string,
  selected?: Flavor,
}) {
  if (!name) return { message: 'Nome inválido!', isValid: false };
  if (ingredients.length === 0) return { message: 'Minimo de um ingrediente', isValid: false };
  if (!type) return { message: 'tipo inválido!', isValid: false };
  if (!category) return { message: 'categoria inválida!', isValid: false };
  // if (!image) return false;
  return { message: 'success', isValid: true };
}
