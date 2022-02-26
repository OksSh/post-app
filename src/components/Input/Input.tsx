import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import styles from '../Input/Input.module.css';
interface IPropsInput {
  type: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  error?: string;
}

export const Input = ({
  type,
  name,
  value,
  onChange,
  onKeyDown,
  error,
}: IPropsInput) => {
  return (
    <div className={styles.form}>
      <label className={styles.form_label} htmlFor={`for${name}`}>
        {name}
      </label>
      <input
        id={`for${name}`}
        className={`${styles.form_input} ${error ? styles.error : null}`}
        type={type}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      ></input>
      {error ? <p className={styles.errorTitle}>{error}</p> : null}
    </div>
  );
};
