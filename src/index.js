import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FoodishApi } from './FoodishApi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FoodishApi/>
    {/*<Example />*/}
    {/*<WindowResize />*/}

  </React.StrictMode>
);