import styles from '../Input/Input.module.css';
interface IPropsInput {
  type: string;
  name: string;
}

export const Input = ({ type, name }: IPropsInput) => {
  return (
    <div className={styles.form}>
      <label className={styles.form_label} htmlFor={`for${name}`}>
        {name}
      </label>
      <input
        id={`for${name}`}
        className={styles.form_input}
        type={type}
        name={name}
      ></input>
    </div>
  );
};
