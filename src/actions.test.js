import * as actions from './actions';

describe('actions', () => {
  describe('handleStartCar', () => {
    it('returns type HANDLE_START_CAR with payload', function () {
      const action = actions.handleStartCar();
      expect(action).toMatchSnapshot();
    });
  });
});
