import { PropTypes } from 'prop-types';
import React from 'react';

import store from '../redux/store';
import { increment } from '../redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    App.propTypes = {
      value: PropTypes.number.isRequired,
    };
  }

  render() {
    return (
      <div>
        <p>HELLO</p>
        <p>{this.props.value}</p>
        <button onClick={() => {
          store.dispatch(increment);
        }}
        >Increment
        </button>
      </div>
    );
  }
}

export default App;
