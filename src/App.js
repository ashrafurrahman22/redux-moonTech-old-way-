import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './redux/store';
import routes from './routes/routes';


const App = () => {
  return (
    
  <div className='px-14'>
      <Provider store={store} >
        <RouterProvider router={routes}/>
    </Provider>
    </div>
  );
};

export default App;