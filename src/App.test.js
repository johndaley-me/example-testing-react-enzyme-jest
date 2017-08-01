import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { App } from './App';
import Car from './Car';
import * as actions from './actions';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  it('matches snapshot', () => {
    const handleStartCar = jest.fn();
    const wrapper = mount(<App isRunning={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ isRunning: true });

    expect(toJson(wrapper)).toMatchSnapshot();
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
});
