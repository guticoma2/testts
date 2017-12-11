import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { IBarButtonProps } from '../index';
import Bar from '../BarButton';
describe('Bar component rendering', () => {
	it('Bar is rendered', () => {
		const props: IBarButtonProps = {
			id: '',
			backgroundColor: 'red',
			dimension: { height: 5 },
			selected: false,
		};
		const wrapper =  shallow(<Bar {...props} />);
		expect(wrapper.find(Bar));
	});

	it('when background color is set to a color then bar is colored as this color', () => {
		const props: IBarButtonProps = {
			id: 'test',
			backgroundColor: 'blue',
			dimension: { height: 5 },
			selected: false,
			onSelect: jest.fn()
		};
		const wrapper = mount(<Bar {...props} />);
		const style = wrapper.find('div').prop('style') || { };
		expect(style.backgroundColor).toBe('blue');
	});

	it('when height is set to a color then bar is colored as this height', () => {
		const props: IBarButtonProps = {
			id: 'test',
			backgroundColor: 'blue',
			dimension: { height: 5 },
			selected: false,
			onSelect: jest.fn()
		};
		const wrapper = mount(<Bar {...props} />);
		const style = wrapper.find('div').prop('style') || { };
		expect(style.height).toBe('5px');
	});

	it('when width is set to a color then bar is colored as this width', () => {
		const props: IBarButtonProps = {
			id: 'test',
			backgroundColor: 'blue',
			dimension: { width: 5 },
			selected: false,
			onSelect: jest.fn()
		};
		const wrapper = mount(<Bar {...props} />);
		const style = wrapper.find('div').prop('style') || { };
		expect(style.width).toBe('5px');
	});
});

describe('Bar component events', () => {
	it('when click on bar select handler receives the id field', () => {
		const props: IBarButtonProps = {
			id: 'test',
			backgroundColor: 'red',
			dimension: { height: 5 },
			selected: false,
			onSelect: jest.fn()
		};
		const wrapper = mount(<Bar {...props} />);
		wrapper.find('button').simulate('click');
		expect(props.onSelect).toBeCalledWith('test');
	});	
});

