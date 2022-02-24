import { createContext } from 'react';
import { RootRouter } from './navigation/RootRouter';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const darkTheme: { background: string; color: string } = {
  background: '#0060DC',
  color: '#ffffff',
};
const lightTheme: { background: string; color: string } = {
  background: '#ffffff',
  color: '#016efc',
};

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: {},
});

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <Provider store={store}>
      <Context.Provider
        value={{
          isDark,
          changeIsDark,
          theme: isDark ? darkTheme : lightTheme,
        }}
      >
        <div className='App'>
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
