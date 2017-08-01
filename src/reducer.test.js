import reducer from './reducer';
import * as actions from './actions';

describe('reducer', () => {
  describe('HANDLE_START_CAR', () => {
    it('sets isRunning to true', function () {
      const previousState = {
        otherProp: 'test-123'
      };
      const action = actions.handleStartCar();
      const nextState = reducer(previousState, action);
      /* expect(nextState).toEqual({
        isRunning: true,
        otherProp: 'test-123'
      }); */
      // use snapshot instead of boilerplate to check all the properties
      expect(nextState).toMatchSnapshot();
    });
  });
});
