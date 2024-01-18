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
