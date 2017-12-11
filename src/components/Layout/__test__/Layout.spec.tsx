import * as React from 'react';
import { shallow } from 'enzyme';
import Layout from '../';

describe ('Layout component rending', () => {
	it('Layout is rendered', () => {
		const wrapper = shallow(<Layout />);
		expect(wrapper.find(Layout));
	});
});
