import styles from '../NavBar/NavBar.module.css';
import { NavLink } from 'react-router-dom';

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.navBar_content}>
          <div className={styles.navBar_button} onClick={closeNavBar}>
            <img src={'img/X.png'} />
          </div>
          <div className={styles.navBar_link}>
            <div className={styles.navBar_link_indent}>
              <NavLink
                exact
                className={styles.navBar_link_style}
                activeClassName={styles.activeLink}
                to='/login'
              >
                Login
              </NavLink>
            </div>
            <div>
              {' '}
              <NavLink
                exact
                className={styles.navBar_link_style}
                activeClassName={styles.activeLink}
                to='/registration'
              >
                Registration
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
