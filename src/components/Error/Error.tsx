import styles from '../Error/Error.module.css';

export const Error = () => {
  return (
    <div className={styles.container}>
      <p className={styles.error}>OOPS.. Something went wrong</p>
    </div>
  );
};
