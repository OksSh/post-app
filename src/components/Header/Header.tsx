import { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import styles from '../Header/Header.module.css';

export const Header = () => {
  const [navBar, setNavBar] = useState<boolean>(false);

  const onClick = () => {
    setNavBar(!navBar);
  };

  const closeNavBar = () => {
    setNavBar(false);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        {' '}
        <div>
          <img
            className={styles.header_img}
            onClick={onClick}
            src={'img/Menu.png'}
          />
        </div>
      </div>
      {navBar ? <NavBar closeNavBar={closeNavBar} /> : null}
    </nav>
  );
};
