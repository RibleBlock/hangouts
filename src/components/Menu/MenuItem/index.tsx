/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import { BoxItem } from './MenuItem.styles';

/* eslint-disable jsx-a11y/img-redundant-alt */
interface MenuItemProps {
  image: {
    url_image: string,
    alt: string,
  },
  nameItem: string,
  ingredients?: string[],
}
export function MenuItem({ image, nameItem, ingredients }: MenuItemProps) {
  return (
    <BoxItem to="/pedir">
      <img
        src={image?.url_image || 'https://qawerk.com/wp-content/uploads/2021/07/no-image-available-icon-6.png'}
        alt={image?.alt || 'Empty'}
      />
      <h3>{nameItem}</h3>
      <p>
        { ingredients?.map((value, index, array) => (
          <span key={index}>
            {array.length > index + 1 ? `${value}, ` : value }
          </span>
        )) }
      </p>
    </BoxItem>
  );
}
