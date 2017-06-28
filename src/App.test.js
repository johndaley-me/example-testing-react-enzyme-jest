import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import Car from './Car';
import * as actions from './actions';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(<App />);
});
it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
it('renders Car', () => {
  const props = {
    isRunning: false,
    handleStartCar: () => {}
  };
  const wrapper = shallow(<App {...props} />);
  const car = wrapper.find(Car);
  expect(car).toHaveLength(1);
  expect(car.prop('handleStartCar')).toEqual(props.handleStartCar);
});
it('matches snapshot', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
