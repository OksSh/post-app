import { TitleForm } from '../TitleForm/TitleForm';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from '../RegistrationForm/RegistrationForm.module.css';
import { Image } from '../Image/Image';
import { Context } from '../../App';
import { useCallback, useContext, useState } from 'react';
import { validationService } from '../../services/validation';

export const RegistrationForm = () => {
  const { theme } = useContext(Context);
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reapetPassword, setReapetPassword] = useState<string>('');

  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    reapetPassword: '',
  });

  const onChangeUserName = useCallback((event) => {
    let value = event.target.value;
    setUserName(value);
    const error = validationService.validateName(value);
    setErrors((errors) => ({ ...errors, userName: error }));
  }, []);

  const onChangeEmail = useCallback((event) => {
    let value = event.target.value;
    setEmail(value);
    const error = validationService.validateEmail(value);
    setErrors((errors) => ({ ...errors, email: error }));
  }, []);

  const onChangePassword = useCallback((event) => {
    let value = event.target.value;
    setPassword(value);
    const error = validationService.validatePassword(value);
    setErrors((errors) => ({ ...errors, password: error }));
  }, []);

  const onChangeReapetPassword = useCallback((event) => {
    let value = event.target.value;
    setReapetPassword(value);
    const error = validationService.validateRepeatedPassword(
      value,
      reapetPassword
    );
    setErrors((errors) => ({ ...errors, reapetPassword: error }));
  }, []);

  const onClick = () => {
    const errors = {
      userName: validationService.validateName(userName),
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
      reapetPassword: validationService.validateRepeatedPassword(
        password,
        reapetPassword
      ),
    };

    setErrors(errors);
  };

  return (
    <div style={theme}>
      <div className={styles.container}>
        <div className={styles.registrationForm}>
          <TitleForm />
          <Input
            onChange={onChangeUserName}
            error={errors.userName}
            type={'text'}
            name={'User Name'}
          />
          <Input
            onChange={onChangeEmail}
            error={errors.email}
            type={'text'}
            name={'Email'}
          />
          <Input
            onChange={onChangePassword}
            error={errors.password}
            type={'text'}
            name={'Password'}
          />
          <Input
            error={errors.reapetPassword}
            type={'text'}
            name={'ConfirmPassword'}
            onChange={onChangeReapetPassword}
          />
          <Button onClick={onClick} text={'Login'} />
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
