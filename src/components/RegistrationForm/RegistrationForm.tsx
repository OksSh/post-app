import { TitleForm } from '../TitleForm/TitleForm';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from '../RegistrationForm/RegistrationForm.module.css';
import { Image } from '../Image/Image';
import { Context } from '../../App';
import { useContext } from 'react';

export const RegistrationForm = () => {
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  return (
    <div style={isDark ? darkTheme : lightTheme}>
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
            <a style={isDark ? darkTheme : lightTheme} href='#'>
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
