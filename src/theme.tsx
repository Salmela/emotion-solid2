import { useContext, createContext, Component, JSX } from 'solid-js';

const ThemeContext = createContext(() => ({}));

export type Theme = Record<string, any>;

export function useTheme(): Theme {
  return useContext(ThemeContext)();
}

export const ThemeProvider: Component<{theme: () => Theme; children?: JSX.Element}> = (props) => {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  )
};
