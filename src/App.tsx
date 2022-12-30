import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { RoutesPath } from './constants/Routes';
import { Home, Login, Register } from './pages';
import { store } from './store';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={RoutesPath.HOME} element={<Home />} />
        <Route path={RoutesPath.LOGIN} element={<Login />} />
        <Route path={RoutesPath.REGISTER} element={<Register />} />
      </Routes>
    </Layout>
  );
};

export const WrappedApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};
