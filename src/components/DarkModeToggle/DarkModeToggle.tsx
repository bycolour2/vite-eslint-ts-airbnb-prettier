import { FC, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkMode } from '../../hooks/useDarkMode';

export const DarkModeToggle: FC = () => {
  const [colorTheme, setColorTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setColorTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div data-testid="DarkModeToggleId">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} />
    </div>
  );
};

export default DarkModeToggle;
