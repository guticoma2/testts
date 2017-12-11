import * as React from 'react';
import { mount } from 'enzyme';
import Canvas from '../Canvas';

it('Canvas is rendered', () => {
	// mount becuase it's using getComputedStyle
	const wrapper =  mount(<Canvas {...Canvas.defaultProps} />);
	expect(wrapper.find(Canvas));
});