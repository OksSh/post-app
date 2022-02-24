import styles from '../Title/Title.module.css';
import { Context } from '../../App';
import { useContext } from 'react';

interface ITitleProps {
  title: string;
}

export const Title = ({ title }: ITitleProps) => {
  const { theme } = useContext(Context);

  return (
    <>
      <p style={theme} className={styles.title}>
        {title}
      </p>
    </>
  );
};
