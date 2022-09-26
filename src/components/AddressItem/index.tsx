import { MenuDropdown } from '../MenuDropdown';
import { BoxItem } from './AddressItem.styles';

interface AddressItemProps {
  idAddress: number,
  title: string,
  subTitle?: string,
  config: {
    option: string,
    action: (value: number) => void;
  }[],
}

export function AddressItem({
  idAddress, title, subTitle, config,
}: AddressItemProps) {
  return (
    <BoxItem>
      <div>
        <p>{title}</p>
        <span>{subTitle}</span>
      </div>

      <MenuDropdown idAddress={idAddress} config={config} />
    </BoxItem>
  );
}
