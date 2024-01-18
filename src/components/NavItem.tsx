import { NavItemProps } from '../types/myTypes';

function NavItem({ text, id, active, darkModeIsOn, isNavbarOnTop, closeNavWindow, setActive }: NavItemProps<string>) {
  const isActive = id === active;
  const color = isActive ? (darkModeIsOn ? 'text-blue-medium' : isNavbarOnTop ? ' text-primary' : 'text-black') : '';
  return (
    <li>
      <a
        href={`#${text}`}
        className={`uppercase  ${color}`}
        onClick={() => {
          setActive(id);
          closeNavWindow();
        }}
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
