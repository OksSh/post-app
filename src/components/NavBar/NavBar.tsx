import styles from '../NavBar/NavBar.module.css';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../App';
import { Toggle } from '../Toggle/Toggle';

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  const { changeIsDark } = useContext(Context);
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  return (
    <div style={!isDark ? darkTheme : lightTheme} className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.navBar_content}>
          <div className={styles.navBar_button} onClick={closeNavBar}>
            <img src={!isDark ? 'img/X.png' : 'img/X-dark.png'} />
          </div>
          <div className={styles.navBar_link}>
            <div className={styles.navBar_link_indent}>
              <NavLink
                exact
                style={!isDark ? darkTheme : lightTheme}
                className={styles.navBar_link_style}
                activeClassName={styles.activeLink}
                to='/login'
              >
                Login
              </NavLink>
            </div>
            <div>
              <NavLink
                exact
                style={!isDark ? darkTheme : lightTheme}
                className={styles.navBar_link_style}
                activeClassName={styles.activeLink}
                to='/registration'
              >
                Registration
              </NavLink>
            </div>
          </div>
          <Toggle onClick={changeIsDark} />
        </div>
      </div>
    </div>
  );
};
