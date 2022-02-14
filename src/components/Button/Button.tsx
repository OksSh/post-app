import styles from '../Button/Button.module.css';
import { useContext } from 'react';
import { Context } from '../../App';

export interface IPropsButton {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IPropsButton) => {
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  return (
    <>
      <button
        style={!isDark ? darkTheme : lightTheme}
        onClick={onClick}
        className={styles.button}
      >
        {text}
      </button>
    </>
  );
};
