import * as React from 'react';
import { shallow } from 'enzyme';
import { IBarProps } from '../index';
import Bar from '../Bar';

it('Bar is rendered', () => {
	const props: IBarProps = {
		id: '',
		backgroundColor: 'red',
		dimension: { height: 5 },
		selected: false,
	};
	const barWrapper =  shallow(<Bar {...props} />);
	expect(barWrapper.find(Bar));
});