import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AllPost } from '../components/AllPosts/AllPost';
import { Header } from '../components/Header/Header';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={AllPost} exact />
        <Route path='/login' component={LoginForm} exact />
        <Route path='/registration' component={RegistrationForm} exact />
      </Switch>
    </BrowserRouter>
  );
};
