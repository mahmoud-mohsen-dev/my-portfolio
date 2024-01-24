import NavItem from '../components/NavItem';
import { TabsProps } from '../types/myTypes';
import { useState } from 'react';

const tabs = ['home', 'about', 'projects', 'contact'];
function Tabs({ darkModeIsOn, isNavbarOnTop, closeNavWindow }: TabsProps<string>) {
  const [active, setActive] = useState(tabs[0]);
  return (
    <ul className=" flex basis-1/2 flex-col justify-between text-center md-tab:absolute md-tab:left-1/2 md-tab:-translate-x-1/2 md-tab:flex-row md-tab:gap-3 lg-tab:gap-5 md-des:gap-10">
      {tabs.map((text) => {
        return (
          <NavItem
            text={text}
            active={active}
            setActive={setActive}
            darkModeIsOn={darkModeIsOn}
            isNavbarOnTop={isNavbarOnTop}
            closeNavWindow={closeNavWindow}
            key={text}
          />
        );
      })}
    </ul>
  );
}

export default Tabs;
