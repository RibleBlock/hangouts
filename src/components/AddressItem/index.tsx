import { MenuDropdown } from '../MenuDropdown';
import { BoxItem } from './AddressItem.styles';

interface AddressItemProps {
  title: string,
  subTitle?: string,
  config: {
    option: string,
    action: (value?: string | number | boolean) => void;
  }[],
}

export function AddressItem({ title, subTitle, config }: AddressItemProps) {
  return (
    <BoxItem>
      <div>
        <p>{title}</p>
        <span>{subTitle}</span>
      </div>

      <MenuDropdown config={config} />
    </BoxItem>
  );
}
