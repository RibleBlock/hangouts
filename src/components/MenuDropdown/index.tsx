import { Menu } from '@headlessui/react';
import {
  BoxMenu, DotsIcon, MenuButton, MenuItem, MenuItems,
} from './MenuDropdown.styles';

// options: string[],
// action: (value: string | number | boolean) => void;
interface MenuDropdownProps {
  config: {
    option: string,
    action: (value?: string | number | boolean) => void;
  }[],
}

export function MenuDropdown({ config }: MenuDropdownProps) {
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
            onClick={() => action()}
          >
            {option}
          </MenuItem>
        )) }
      </MenuItems>
    </Menu>
  );
}
