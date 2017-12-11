import * as React from 'react';
import { shallow } from 'enzyme';
import BarButton from '../../BarButton';
import SizeBoard, { ISizeBoardProps } from '../';

describe('SizeBoard rendering', () => {
	it('SizeBoard is rendered', () => {
		const props: ISizeBoardProps = {
			sizes: [1],
			selected: 1
		};
		const wrapper = shallow(<SizeBoard {...props} />);
		expect(wrapper.find(SizeBoard));
	});
	
	it('Renders as number of BarButtons as colors length', () => {
		const props: ISizeBoardProps = {
			sizes: [1, 2, 3],
			selected: 1
		};
		const wrapper = shallow(<SizeBoard {...props} />);
		expect(wrapper.find(BarButton).length).toBe(3);
	});
});
