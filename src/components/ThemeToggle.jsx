import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // Apply theme-specific styles
  React.useEffect(() => {
    if (theme === 'light') {
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#000');
      document.documentElement.style.setProperty('--header-background', 'blue'); 
      document.documentElement.style.setProperty('--main-background', '#fff');
      document.documentElement.style.setProperty('--footer-background', '#f1f1f1');
    } else {
      document.documentElement.style.setProperty('--background-color', '#333');
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--header-background', '#444'); 
      document.documentElement.style.setProperty('--main-background', '#555');
      document.documentElement.style.setProperty('--footer-background', '#444');
    }
  }, [theme]);

  return (
    <button onClick={() => dispatch(toggleTheme())}
      style={{
        width: '120px',
        borderRadius: '10px',
        fontWeight: 'bold',
        height: '50px'
      }}>
      {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggle;
