import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import { TabsProps } from '../types/myTypes';
import { useState } from 'react';
import { motion } from 'framer-motion';
const tabs = ['home', 'projects', 'challenges', 'contact'];

function NotHomeTabs({ darkModeIsOn, closeNavWindow }: TabsProps<boolean>) {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const [activeTab, setActiveTab] = useState(path);

  const handleClickedTab = (text: string) => {
    closeNavWindow(true);
    setActiveTab(text);
  };

  return (
    <motion.ul className=" flex basis-1/2 flex-col justify-between text-center md-tab:absolute md-tab:left-1/2 md-tab:-translate-x-1/2 md-tab:flex-row md-tab:gap-2 sm-des:gap-5 md-des:gap-5">
      {tabs.map((text) => {
        return (
          <NavItem
            text={text}
            activeTab={activeTab}
            darkModeIsOn={darkModeIsOn}
            onHandleClicked={() => handleClickedTab(text)}
            key={text}
          />
        );
      })}
    </motion.ul>
  );
}
export default NotHomeTabs;
