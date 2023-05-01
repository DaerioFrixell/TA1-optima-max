import './app.scss';
import { FC, useEffect } from 'react';
import { Header } from '../../components/header/Header';
import { AppRoutes } from '../../routes/AppRoutes';
import { useAppDispatch } from '../../hooks/redux.hook';
import { GetCardActionCreator } from '../../model/card/card.actionCreator';

export const App: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(GetCardActionCreator())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <AppRoutes />
    </div>
  );
}
