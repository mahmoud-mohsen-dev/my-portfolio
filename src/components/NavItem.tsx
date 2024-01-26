import { motion } from 'framer-motion';
import { NavItemProps } from '../types/myTypes';

function NavItem({ text, activeTab, darkModeIsOn, onHandleClicked }: NavItemProps<string>) {
  const isActive = text === activeTab;

  let styles;
  if (isActive) {
    styles = 'text-white';
  }
  if (!isActive && darkModeIsOn) {
    styles = 'text-slate-300 hover:text-slate-200 hover:bg-slate-700';
  }
  if (!isActive && !darkModeIsOn) {
    styles = 'text-black hover:text-slate-700 hover:bg-blue-200';
  }

  return (
    <li>
      <a
        href={`#${text}`}
        className={` uppercase transition-colors duration-200 px-3.5 py-1 rounded-md relative ${styles}`}
        onClick={onHandleClicked}
      >
        <span className="relative z-10">{text}</span>
        {isActive && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: 'spring', duration: 0.5 }}
            className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-blue-600 rounded-md"
          ></motion.span>
        )}
      </a>
    </li>
  );
}

export default NavItem;
