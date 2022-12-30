import { useCurrentQuery } from '../../store/weatherapi/weatherapi.api';

export const Register = () => {
  const { isLoading, isError, data } = useCurrentQuery('saint-petersburg');
  return <h1>Register page!</h1>;
}
