import { MenuDropdown } from '../MenuDropdown';
import { BoxItem } from './AddressItem.styles';

interface AddressItemProps {
  idAddress: number,
  title: string,
  subTitle?: string,
  fStart?: boolean,
  hover?: boolean,
  action?: () => void,
  config?: {
    option: string,
    action: (value: number) => void;
  }[],
}

export function AddressItem({
  idAddress, title, subTitle, action, config, fStart, hover,
}: AddressItemProps) {
  return (
    <BoxItem
      onClick={action}
      style={{ justifyContent: fStart ? 'flex-start' : '' }}
      hover={hover}
    >
      <div>
        <p>{title}</p>
        <span>{subTitle}</span>
      </div>

      { config && (
        <MenuDropdown idAddress={idAddress} config={config} />
      ) }
    </BoxItem>
  );
}
