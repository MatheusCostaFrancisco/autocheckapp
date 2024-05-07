import * as Font from './font';

import React, {useContext, useMemo} from 'react';

type FontSizeProps = {
  size_10: number;
  size_12: number;
  size_16: number;
  size_20: number;
  size_25: number;
  size_30: number;
  size_35: number;
};

export type ColorProps = {
  base: {
    white: string;
    black: string;
    transparent: string;
  };
  action: {
    red: string;
    green: string;
  };
  blue: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  gray: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
};

export type ThemeProps = {
  colors: ColorProps;
  fontSize: FontSizeProps;
};

export const theme: ThemeProps = {
  colors: {
    base: {white: '#ffffff', black: '#000000', transparent: 'transparent'},
    action: {red: '#ff0055', green: '#52AA5E'},
    blue: {
      100: '#EBEFFF',
      200: '#B9C4FF',
      300: '#8FA0FF',
      400: '#6E82FE',
      500: '#556AEB',
      600: '#354ACB',
      700: '#1D2F99',
      800: '#0C1A66',
      900: '#020A33',
    },
    gray: {
      100: '#F8F9FA',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',
      600: '#6C757D',
      700: '#495057',
      800: '#343A40',
      900: '#212529',
    },
  },
  fontSize: {
    size_10: Font.FONT_SIZE_10,
    size_12: Font.FONT_SIZE_12,
    size_16: Font.FONT_SIZE_16,
    size_20: Font.FONT_SIZE_20,
    size_25: Font.FONT_SIZE_25,
    size_30: Font.FONT_SIZE_30,
    size_35: Font.FONT_SIZE_35,
  },
};

interface ThemesProviderProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<ThemeProps>({} as ThemeProps);

function ThemeProvider({children}: ThemesProviderProps) {
  const value: ThemeProps = useMemo(
    () => ({
      colors: {...theme.colors},
      fontSize: {...theme.fontSize},
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export {ThemeContext, ThemeProvider, useTheme};
