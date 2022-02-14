import styles from '../Title/Title.module.css';
import { Context } from '../../App';
import { useContext } from 'react';

interface ITitleProps {
  title: string;
}

export const Title = ({ title }: ITitleProps) => {
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  return (
    <>
      <p style={isDark ? darkTheme : lightTheme} className={styles.title}>
        {title}
      </p>
    </>
  );
};
