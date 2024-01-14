import { NavItemProps } from '../dist/types';

function NavItem({ text, id, active, darkModeIsOn, setActive }: NavItemProps<string>) {
  const isActive = id === active;
  const color = isActive ? (darkModeIsOn ? 'text-blue-medium' : ' text-primary') : '';
  return (
    <li>
      <a href={`#${text}`} className={`uppercase  ${color}`} onClick={() => setActive(id)}>
        {text}
      </a>
    </li>
  );
}

export default NavItem;
