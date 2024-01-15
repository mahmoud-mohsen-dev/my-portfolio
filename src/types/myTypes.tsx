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
  setActive: setState<T>;
};

export interface HeroProps {
  darkModeIsOn: boolean;
}
