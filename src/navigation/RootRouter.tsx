import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AllPost } from '../components/AllPosts/AllPost';
import { SelectedPost } from '../components/SelectedPost/SelectedPost';
import { Header } from '../components/Header/Header';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import { Error } from '../components/Error/Error';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={AllPost} exact />
        <Route path='/post/:id' component={SelectedPost} exact />
        <Route path='/login/' component={LoginForm} exact />
        <Route path='/registration' component={RegistrationForm} exact />
        <Route path='*' component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
