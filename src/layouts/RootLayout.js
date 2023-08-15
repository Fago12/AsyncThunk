import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../components';

const RootLayout = () => {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
