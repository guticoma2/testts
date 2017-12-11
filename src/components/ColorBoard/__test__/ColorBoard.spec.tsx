import * as React from 'react';
import { shallow } from 'enzyme';
import BarButton from '../../BarButton';
import ColorBoard, { IColorBoardProps } from '../';

describe('ColorBoard component rendering', () => {
	it('ColorBoard is rendered', () => {
		const props: IColorBoardProps = {
			colors: ['red'],
			selected: 'red'
		};
		const wrapper = shallow(<ColorBoard {...props} />);
		expect(wrapper.find(ColorBoard));
	});
	it('Renders as number of BarButtons as colors length', () => {
		const props: IColorBoardProps = {
			colors: ['red', 'blue', 'black'],
			selected: 'red'
		};
		const wrapper = shallow(<ColorBoard {...props} />);
		expect(wrapper.find(BarButton).length).toBe(3);
	});
});
