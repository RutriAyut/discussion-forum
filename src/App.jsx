import React, { useEffect } from 'react';
import Loading from './components/Loading';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import NavigationBottom from './components/NavigationBottom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import ThreadAddPage from './pages/ThreadAddPage';
import RegisterPage from './pages/RegisterPage';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, []);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    toast.info('See you later');
    dispatch(asyncPreloadProcess());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <div className='app-container'>
          <header className='nav-container'>
            <Navigation />
          </header>
          <main>
            <Loading />
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/thread/:id' element={<DetailPage />} />
              <Route path='/leaderboards' element={<LeaderboardPage />} />
              <Route path='/*' element={<HomePage />} />
            </Routes>
          </main>
          <footer>
            <NavigationBottom />
          </footer>
          <ToastContainer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className='app-container'>
        <header className='nav-container'>
          <Navigation />
        </header>
        <main>
          <Loading />
          <Routes>
            <Route path='/thread/:id' element={<DetailPage />} />
            <Route path='/leaderboards' element={<LeaderboardPage />} />
            <Route path='/add' element={<ThreadAddPage />} />
            <Route path='/*' element={<HomePage />} />
          </Routes>
        </main>
        <footer>
          <NavigationBottom authUser={authUser} signOut={onSignOut} />
        </footer>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
