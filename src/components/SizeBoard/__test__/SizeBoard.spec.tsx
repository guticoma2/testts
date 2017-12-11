import * as React from 'react';
import { shallow } from 'enzyme';
import SizeBoard, { ISizeBoardProps } from '../';

it('Bar is rendered', () => {
	const props: ISizeBoardProps = {
		sizes: [1],
		selected: 1
	};
	const barWrapper = shallow(<SizeBoard {...props} />);
	expect(barWrapper.find(SizeBoard));
});