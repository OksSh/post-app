import styles from '../Button/Button.module.css';
import { useContext } from 'react';
import { Context } from '../../App';

export interface IPropsButton {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IPropsButton) => {
  const { isDark } = useContext(Context);

  return (
    <>
      <button
        onClick={onClick}
        className={isDark ? styles.button_dark : styles.button}
      >
        {text}
      </button>
    </>
  );
};
