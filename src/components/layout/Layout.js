import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({children}) => {
  return (
    <div className="d-flex" style={{minHeight: '100vh'}}>
       <Sidebar/>
       <div className="flex-grow-1">
          <Navbar/>
          <div className='container-fluid p-4 '>
            {children}
          </div>
          <Footer/>
        </div>
    </div>
  );
}

export default Layout;
