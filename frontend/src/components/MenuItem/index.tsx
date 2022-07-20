/* eslint-disable camelcase */
import { BoxItem } from './MenuItem.styles';

/* eslint-disable jsx-a11y/img-redundant-alt */
interface MenuItemProps {
  image: {
    url_image: string,
    alt: string,
  },
  nameItem: string,
  ingredients?: Array<{
    ingredient: {
      id_ingredient: number,
      created_at: string,
      name: string,
      quantidade: number
    },
  }>,
}
export function MenuItem({ image, nameItem, ingredients }: MenuItemProps) {
  return (
    <BoxItem>
      <img
        src={image?.url_image || 'https://qawerk.com/wp-content/uploads/2021/07/no-image-available-icon-6.png'}
        alt={image?.alt || 'Empty'}
      />
      <h3>{nameItem}</h3>
      <p>
        { ingredients?.map(({
          ingredient: {
            id_ingredient, name,
          },
        }, index, array) => (
          <span key={id_ingredient}>
            {array.length > index + 1 ? `${name}, ` : name }
          </span>
        )) }
      </p>
    </BoxItem>
  );
}
