import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/app/App';
import reportWebVitals from './reportWebVitals';
import '@ya.praktikum/react-developer-burger-ui-components';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./services/reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter} from "react-router-dom";

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const state = createStore(rootReducer, enhancer)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={state}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
