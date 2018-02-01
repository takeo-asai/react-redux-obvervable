let initialState = {
  count: 1,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      console.log('increment: ' + state.count + ' + 1');
      return {count: state.count + 1}
    default:
      return state
  }
}
