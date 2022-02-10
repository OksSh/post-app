import styles from '../TitleForm/TitleForm.module.css';
import { NavLink } from 'react-router-dom';

export const TitleForm = () => {
  return (
    <div className={styles.titleForm}>
      <div>
        <NavLink
          exact
          activeClassName={styles.activeLink}
          className={styles.titleForm_item}
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
          className={styles.titleForm_item}
          to='/registration'
        >
          Registration
        </NavLink>
      </div>
    </div>
  );
};
