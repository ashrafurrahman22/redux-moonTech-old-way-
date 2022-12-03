import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import store from './redux/store';


const App = () => {
  return (
    
  <div className='px-14'>
      <Provider store={store} >
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Provider>
    </div>
  );
};

export default App;