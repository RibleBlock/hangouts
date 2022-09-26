import { Menu } from '@headlessui/react';
import {
  DotsIcon, MenuButton, MenuItem, MenuItems,
} from './MenuDropdown.styles';

// options: string[],
// action: (value: string | number | boolean) => void;
interface MenuDropdownProps {
  idAddress: number,
  config: {
    option: string,
    action: (value: number) => void;
  }[],
}

export function MenuDropdown({ idAddress, config }: MenuDropdownProps) {
  return (
    <Menu as="div">
      <MenuButton>
        <DotsIcon weight="bold" />
      </MenuButton>
      <MenuItems>
        { config.map(({ option, action }) => (
          <MenuItem
            key={option}
            as="div"
            onClick={() => action(idAddress)}
          >
            {option}
          </MenuItem>
        )) }
      </MenuItems>
    </Menu>
  );
}
