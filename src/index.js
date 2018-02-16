import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const store = createStore((state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1,
      };
    default: return {
      value: 0,
    };
  }
});

const App = props => (
  <div>
    <p>HELLO</p>
    <p>{props.value}</p>
    <button onClick={() => {
      store.dispatch({
        type: 'INCREMENT',
      });
    }}
    >Increment
    </button>
  </div>

);

const render = () => {
  ReactDOM.render(<App value={store.getState().value} />, document.getElementById('root'));
};

store.subscribe(render);

export { render, store };

render();
