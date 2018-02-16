const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1,
      };
    default: return {
      value: 0,
    };
  }
};

export default reducer;
