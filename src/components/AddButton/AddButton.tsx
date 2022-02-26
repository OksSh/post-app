import styles from '../AddButton/AddButton.module.css';
import { IPropsButton } from '../Button/Button';
import { Context } from '../../App';
import { useContext } from 'react';

export const AddButton = ({ text, onClick }: IPropsButton) => {
  const { isDark } = useContext(Context);
  return (
    <>
      <button
        onClick={onClick}
        className={isDark ? styles.addButton_dark : styles.addButton}
      >
        {text}
      </button>
    </>
  );
};
