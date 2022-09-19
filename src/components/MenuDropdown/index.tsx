import { Menu } from '@headlessui/react';
import {
  BoxMenu, DotsIcon, MenuButton, MenuItem, MenuItems,
} from './MenuDropdown.styles';

interface MenuDropdownProps {
  options: string[],
}

export function MenuDropdown({ options }: MenuDropdownProps) {
  return (
    <Menu as="div">
      <MenuButton>
        <DotsIcon weight="bold" />
      </MenuButton>
      <MenuItems>
        { options.map((item) => (
          <MenuItem
            as="div"
            onClick={() => console.log(item)}
          >
            {item}
          </MenuItem>
        )) }
      </MenuItems>
    </Menu>
  );
}
