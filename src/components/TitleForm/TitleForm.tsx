import styles from '../TitleForm/TitleForm.module.css';
import { NavLink } from 'react-router-dom';
import { Context } from '../../App';
import { useContext } from 'react';

export const TitleForm = () => {
  const { isDark } = useContext(Context);

  return (
    <div className={styles.titleForm}>
      <div>
        <NavLink
          exact
          activeClassName={styles.activeLink}
          className={
            isDark ? styles.titleForm_item_dark : styles.titleForm_item
          }
          to='/login'
        >
          Login
        </NavLink>
      </div>
      <div className={styles.line}></div>
      <div>
        <NavLink
          exact
          activeClassName={styles.activeLink}
          className={
            isDark ? styles.titleForm_item_dark : styles.titleForm_item
          }
          to='/registration'
        >
          Registration
        </NavLink>
      </div>
    </div>
  );
};
