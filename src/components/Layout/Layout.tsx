import { FC } from 'react';
import { Header } from '../Header/Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <h1>footer</h1>
    </>
  );
};
