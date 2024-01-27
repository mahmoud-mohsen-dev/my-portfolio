import { setState } from '../../types/myTypes';
import Toggle from './Toggle';

function ToggleDayNightButton({
  darkModeIsOn,
  setDarkModeIsOn,
}: {
  darkModeIsOn: boolean;
  setDarkModeIsOn: setState<boolean>;
}) {
  const handleToggled = () => {
    setDarkModeIsOn((prev) => !prev);
  };
  return (
    <div>
      <Toggle toggled={darkModeIsOn} onClick={handleToggled} />
    </div>
  );
}

export default ToggleDayNightButton;
