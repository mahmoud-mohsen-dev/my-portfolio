import { DarkAndCvButtonsProps } from '../types/myTypes';
import ToggleDayNightButton from './ToggleDayNightButton';

function DarkAndCvButtons({ cvBtnStyles, closeNavWindow, darkModeIsOn, setDarkModeIsOn }: DarkAndCvButtonsProps) {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-10 md-tab:max-w-40 md-tab:flex-row md-tab:flex-nowrap md-tab:justify-end md-tab:gap-8">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1d45q1btHjTNrjyUrHY4NwmYVjsW7CH6t/view?usp=sharing"
        className={`rounded-full hover:scale-110 hover:transition-all hover:duration-200 active:scale-100 ${cvBtnStyles}`}
        onClick={() => closeNavWindow()}
      >
        CV
      </a>
      <ToggleDayNightButton darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} />
    </div>
  );
}

export default DarkAndCvButtons;
