import styles from '../Button/Button.module.css';

interface IPropsButton {
  text: string;
}

export const Button = ({ text }: IPropsButton) => {
  return (
    <>
      <button className={styles.button}>{text}</button>
    </>
  );
};
