import { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import styles from '../Header/Header.module.css';
import { Context } from '../../App';
import { useContext } from 'react';

export const Header = () => {
  const [navBar, setNavBar] = useState<boolean>(false);
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  const onClick = () => {
    setNavBar(!navBar);
  };

  const closeNavBar = () => {
    setNavBar(false);
  };

  return (
    <nav style={isDark ? darkTheme : lightTheme} className={styles.header}>
      <div className={styles.container}>
        <div>
          <img
            className={styles.header_img}
            onClick={onClick}
            src={!isDark ? 'img/Menu.png' : 'img/Menu-dark.png'}
          />
        </div>
      </div>
      {navBar ? <NavBar closeNavBar={closeNavBar} /> : null}
    </nav>
  );
};
