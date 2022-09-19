import { MenuDropdown } from '../MenuDropdown';
import { BoxItem } from './AddressItem.styles';

interface AddressItemProps {
  title: string,
  subTitle?: string,
  action: (value: any) => void,
}

export function AddressItem({ title, subTitle, action }: AddressItemProps) {
  return (
    <BoxItem>
      <div>
        <p>{title}</p>
        <span>{subTitle}</span>
      </div>

      <MenuDropdown options={['Editar', 'Excluir']} />
    </BoxItem>
  );
}
