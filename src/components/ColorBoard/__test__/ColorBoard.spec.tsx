import * as React from 'react';
import { shallow } from 'enzyme';
import ColorBoard, { IColorBoardProps } from '../';

it('Bar is rendered', () => {
	const props: IColorBoardProps = {
		colors: ['red'],
		selected: 'red'
	};
	const barWrapper = shallow(<ColorBoard {...props} />);
	expect(barWrapper.find(ColorBoard));
});