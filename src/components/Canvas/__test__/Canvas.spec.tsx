import * as React from 'react';
import { mount } from 'enzyme';
import Canvas from '../Canvas';

it('Bar is rendered', () => {
	// mount becuase it's using getComputedStyle
	const barWrapper =  mount(<Canvas {...Canvas.defaultProps} />);
	expect(barWrapper.find(Canvas));
});