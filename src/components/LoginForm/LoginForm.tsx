import { TitleForm } from '../TitleForm/TitleForm';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from '../LoginForm/LoginForm.module.css';
import { Image } from '../Image/Image';
import { Context } from '../../App';
import { useContext } from 'react';

export const LoginForm = () => {
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  return (
    <div style={isDark ? darkTheme : lightTheme}>
      <div className={styles.container}>
        <div className={styles.titleForm}>
          <TitleForm />
          <Input type={'text'} name={'Email'} />
          <Input type={'text'} name={'Password'} />
          <Button onClick={() => {}} text={'Login'} />
          <div className={styles.loginForm_text}>
            <p>If you have account, you can </p>
            <a style={isDark ? darkTheme : lightTheme} href='#'>
              login
            </a>
          </div>
        </div>
        <div className={styles.titleForm_image}>
          <Image url='img/login-wave.png' />
        </div>
      </div>
    </div>
  );
};
