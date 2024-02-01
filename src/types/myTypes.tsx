export type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface darkModeIsOnType {
  cvUrl?: string;
  darkModeIsOn: boolean;
}

export interface NavbarProps<T> extends darkModeIsOnType {
  setDarkModeIsOn: setState<T>;
}

export interface NavItemProps<T> {
  text: T;
  activeTab: T;
  darkModeIsOn: boolean;
  onHandleClicked: () => void;
}

export interface TabsProps<T> {
  darkModeIsOn: T;
  closeNavWindow: setState<T>;
}

export interface HeroProps {
  darkModeIsOn: boolean;
  cvUrl: string;
}

export interface ButtonProps<M> {
  className: M;
  children: React.ReactNode;
  value?: M;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick: () => void;
}

export interface AnchorProps<M> extends Omit<ButtonProps<M>, 'onClick'> {
  href: string;
  blank?: boolean;
}

export interface projectType {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  tools: string[];
  liveSrc: string;
  codeSrc: string;
  order: number | null;
}

export interface challengeType extends projectType {}

export interface popUpType {
  success: boolean;
  failed: boolean;
  isSubmited: boolean;
}

export interface PopUpProps {
  showPopUp: popUpType;
  setShow: React.Dispatch<React.SetStateAction<popUpType>>;
}

export interface DarkAndCvButtonsProps {
  cvBtnStyles: string;
  closeNavWindow: () => void;
  darkModeIsOn: boolean;
  cvUrl: string;
  setDarkModeIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export type projectsSectionProps = darkModeIsOnType & { projectsData: projectType[]; isChallenge: boolean };
