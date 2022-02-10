import styles from '../Input/Input.module.css';

interface IPropsInput {
  id: string;
  type: string;
  name: string;
}

export const Input = ({ id, type, name }: IPropsInput) => {
  return (
    <div className={styles.form}>
      <label className={styles.form_label} htmlFor={id}>
        {name}
      </label>
      <input
        className={styles.form_input}
        id={id}
        type={type}
        name={name}
      ></input>
    </div>
  );
};
