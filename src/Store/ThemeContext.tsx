import { createContext } from 'react';

const ThemeContext = createContext<ThemeDataContext>({
  theme: 'dark',
  setTheme: () => {},
});

type ThemeDataContext = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export default ThemeContext;
