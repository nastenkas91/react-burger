import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/app/App';
import reportWebVitals from './reportWebVitals';
import '@ya.praktikum/react-developer-burger-ui-components';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";
import {state} from "./services/store";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={state}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
