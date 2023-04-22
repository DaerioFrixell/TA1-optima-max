import './app.scss';
import { FC } from 'react';
import { Header } from '../../components/header/Header';
import { AppRoutes } from '../../routes/AppRoutes';

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
    </div>
  );
}
