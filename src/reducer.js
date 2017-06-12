export default function(state, action) {
  if (action.type === 'HANDLE_START_CAR') {
    return {
      ...state,
      isRunning: true
    };
  }
  return state;
};
