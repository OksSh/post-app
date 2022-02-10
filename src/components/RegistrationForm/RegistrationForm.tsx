import { TitleForm } from '../TitleForm/TitleForm';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from '../RegistrationForm/RegistrationForm.module.css';

export const RegistrationForm = () => {
  return (
    <div className={styles.registrationForm}>
      <TitleForm />
      <Input id={'formUserName'} type={'text'} name={'User Name'} />
      <Input id={'formEmail'} type={'text'} name={'Email'} />
      <Input id={'formPassword'} type={'text'} name={'Password'} />
      <Input
        id={'formConfirmPassword'}
        type={'text'}
        name={'ConfirmPassword'}
      />
      <Button text={'Login'} />
      <div className={styles.registrationForm_text}>
        <p>Forgot your password?</p>
        <a href='#'>Reset password</a>
      </div>
    </div>
  );
};
