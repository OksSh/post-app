import { TitleForm } from '../TitleForm/TitleForm';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from '../LoginForm/LoginForm.module.css';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <div className={styles.titleForm}>
      <TitleForm />
      <div></div>
      <Input id={'formEmail'} type={'text'} name={'Email'} />
      <Input id={'FormPassword'} type={'text'} name={'Password'} />
      <Button text={'Login'} />
      <div className={styles.loginForm_text}>
        <p>If you have account, you can </p>
        <a href='#'>login</a>
      </div>
    </div>
  );
};
