import { createContext } from 'react';
import { RootRouter } from './navigation/RootRouter';
import { useState } from 'react';

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  darkTheme: {},
  lightTheme: {},
});

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
    console.log('great');
    console.log(isDark);
  };

  const darkTheme: { background: string; color: string } = {
    background: '#0060DC',
    color: '#ffffff',
  };
  const lightTheme: { background: string; color: string } = {
    background: '#ffffff',
    color: '#016efc',
  };

  return (
    <Context.Provider
      value={{
        isDark,
        changeIsDark,
        darkTheme,
        lightTheme,
      }}
    >
      <div className='App'>
        <RootRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
