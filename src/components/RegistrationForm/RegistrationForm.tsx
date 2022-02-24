import { TitleForm } from '../TitleForm/TitleForm';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from '../RegistrationForm/RegistrationForm.module.css';
import { Image } from '../Image/Image';
import { Context } from '../../App';
import { useContext } from 'react';

export const RegistrationForm = () => {
  const { theme } = useContext(Context);
  const { isDark } = useContext(Context);

  return (
    <div style={theme}>
      <div className={styles.container}>
        <div className={styles.registrationForm}>
          <TitleForm />
          <Input type={'text'} name={'User Name'} />
          <Input type={'text'} name={'Email'} />
          <Input type={'text'} name={'Password'} />
          <Input type={'text'} name={'ConfirmPassword'} />
          <Button onClick={() => {}} text={'Login'} />
          <div className={styles.registrationForm_text}>
            <p>Forgot your password?</p>
            <a style={theme} href='#'>
              Reset password
            </a>
          </div>
          <div className={styles.registrationForm_image}>
            <Image url='img/registration-wave.png' />
          </div>
        </div>
      </div>
    </div>
  );
};
