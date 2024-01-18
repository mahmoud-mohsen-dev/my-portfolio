type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export type NavbarProps<T> = {
  darkModeIsOn: T;
  setDarkModeIsOn: setState<T>;
};

export type NavItemProps<T> = {
  text: string;
  id: T;
  active: T;
  darkModeIsOn: boolean;
  isNavbarOnTop: boolean;
  closeNavWindow: () => void;
  setActive: setState<T>;
};

export interface HeroProps {
  darkModeIsOn: boolean;
}

export interface ButtonProps<M> {
  className: M;
  children: M;
  onClick: () => void;
}

export interface AnchorProps<M> extends Omit<ButtonProps<M>, 'onClick'> {
  href: string;
}

export interface projectType {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  tools: string[];
  liveSrc: string;
  codeSrc: string;
}
