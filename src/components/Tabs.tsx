import NavItem from '../components/NavItem';
import { TabsProps } from '../types/myTypes';
import { useEffect, useState, useRef } from 'react';

const tabs = ['home', 'about', 'projects', 'contact'];

function Tabs({ darkModeIsOn, closeNavWindow }: TabsProps<boolean>) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [clickedTab, setClickedTab] = useState('');
  const [scrolledSection, setSrcolledSection] = useState('');
  const sectionsRef = useRef<HTMLElement[] | null>(null);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('[data-section]') as NodeListOf<HTMLElement>);
    const handleScroll = () => {
      const scollY = window.scrollY;
      let newActiveSection = '';
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          const sectionOffsetTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scollY >= sectionOffsetTop - 80 && scollY < sectionOffsetTop + sectionHeight - 80) {
            newActiveSection = section.id;
          }
        });
      }
      setSrcolledSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickedTab = (text: string) => {
    closeNavWindow(true);
    setClickedTab(text);
    setActiveTab(text);
  };

  useEffect(() => {
    // this will run only on scrolling
    if (!clickedTab && scrolledSection) {
      setActiveTab(scrolledSection);
    }
    // this will run after scolled section is equal to active section
    if (clickedTab === activeTab && scrolledSection === activeTab) {
      setClickedTab('');
      setSrcolledSection('');
    }
  }, [clickedTab, scrolledSection, activeTab]);

  return (
    <ul className=" flex basis-1/2 flex-col justify-between text-center md-tab:absolute md-tab:left-1/2 md-tab:-translate-x-1/2 md-tab:flex-row md-tab:gap-2 sm-des:gap-5 md-des:gap-5">
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
    </ul>
  );
}

export default Tabs;
