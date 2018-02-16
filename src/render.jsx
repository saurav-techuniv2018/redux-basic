import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import store from './redux/store';

const render = () => {
  ReactDOM.render(<App value={store.getState().value} />, document.getElementById('root'));
};

export default render;
