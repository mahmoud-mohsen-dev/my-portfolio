import { NavItemProps } from '../types/myTypes';

function NavItem({ text, active, darkModeIsOn, isNavbarOnTop, closeNavWindow, setActive }: NavItemProps<string>) {
  const isActive = text === active;
  const color = isActive ? (darkModeIsOn ? 'text-blue-medium' : isNavbarOnTop ? ' text-primary' : 'text-white') : '';
  return (
    <li>
      <a
        href={`#${text}`}
        className={`relative uppercase  ${color}`}
        onClick={() => {
          setActive(text);
          closeNavWindow();
        }}
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
