import * as React from 'react';
import { shallow } from 'enzyme';
import Layout from '../';

it('Bar is rendered', () => {
	const barWrapper = shallow(<Layout />);
	expect(barWrapper.find(Layout));
});