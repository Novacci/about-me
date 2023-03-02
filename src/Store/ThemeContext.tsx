import { createContext } from 'react';
import { useState } from 'react';

const ThemeContext = createContext<ThemeDataContext>({
  theme: false,
  setTheme: () => {},
});

type ThemeDataContext = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export default ThemeContext;
