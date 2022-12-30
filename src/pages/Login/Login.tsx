import { useCurrentQuery } from '../../store/weatherapi/weatherapi.api';

export const Login = () => {
  const { isLoading, isError, data } = useCurrentQuery('saint-petersburg');
  return <h1>Login page!</h1>;
}