import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import Car from './Car';
import * as actions from './actions';

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
