let initialState = {
  count: 1,
  status: 'idle',
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {count: state.count + 1, status: state.status}
    case 'PING':
      return {count: state.count, status: 'ping...'};
    case 'PONG':
      return {count: state.count, status: 'pong'};
    default:
      return state
  }
}
