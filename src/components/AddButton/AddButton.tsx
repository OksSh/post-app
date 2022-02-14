import styles from '../AddButton/AddButton.module.css';
import { IPropsButton } from '../Button/Button';
import { Context } from '../../App';
import { useContext } from 'react';

export const AddButton = ({ text, onClick }: IPropsButton) => {
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);
  return (
    <>
      <button
        style={!isDark ? darkTheme : lightTheme}
        onClick={onClick}
        className={styles.addButton}
      >
        {text}
      </button>
    </>
  );
};
