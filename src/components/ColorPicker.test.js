import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';
import { JestEnvironment } from '@jest/environment';

describe('ColorPicker component', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker selectColorHandler={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
