import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom';
import './bootstrap.min.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { faShoppingCart, faUser, faStar as fasFaStar, faStarHalfAlt, faTrash, faTimes} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(faShoppingCart, faUser, fasFaStar, farFaStar, faStarHalfAlt, faTrash, faTimes);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
