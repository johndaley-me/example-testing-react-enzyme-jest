import React from 'react';
import { shallow } from 'enzyme';
import { Car } from './Car';
import Engine from './Engine';

describe('<Car />', () => {
  describe('renders', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Car color='red' />);
    });
    // check dynamic data renders correctly
    // find elements by ID
    it('renders the heading', () => {
      const heading = wrapper.find('#car--heading');
      expect(heading).toHaveLength(1);
      expect(heading.text()).toEqual('I am a red car');
    });
    // check child components are called correctly
    it('has a diesel engine', () => {
      // testing hint: If the child component is a composed component
      // then you will likely need to find by class otherwise
      // finding by string (e.g. 'Engine') will work
      const engine = wrapper.find(Engine);
      expect(engine.prop('type')).toEqual('diesel');
    });
  });
});
