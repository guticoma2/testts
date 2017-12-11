import * as React from 'react';
import { shallow } from 'enzyme';
import UndoRedoBoard, { IUndoRedoBoardProps } from '../';

describe('UndoRedo component rendering', () => {
	it('UndoRedo is rendered', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: false,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		expect(wrapper.find(UndoRedoBoard));
	});
	it('UndoRedo renders 2 buttons', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: false,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		expect(wrapper.find('button').length).toBe(2);
	});
	it('First button should be Undo button', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: false,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		expect(wrapper.find('button').first().text()).toBe('Undo');
	});
	it('Second button should be Redo button', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: false,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		expect(wrapper.find('button').at(1).text()).toBe('Redo');
	});
	it('if canUndo is false then Undo button should be disabled', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: false,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		expect(wrapper.find('button').first().prop('disabled')).toBe(true);
	});
	it('if canUndo is true then Undo button should be enabled', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: true,
			canRedo: false,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		expect(wrapper.find('button').first().prop('disabled')).toBe(false);
	});
	it('if canRedo is false then Redo button should be disabled', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: false,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		expect(wrapper.find('button').at(1).prop('disabled')).toBe(true);
	});
	it('if canRedo is true then Redo button should be enabled', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: true,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		expect(wrapper.find('button').at(1).prop('disabled')).toBe(false);
	});
});

describe('UndoRedo component events', () => {
	it('if Undo button is clicked then onUndo callback is called', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: true,
			// tslint:disable-next-line:no-empty
			onUndo: jest.fn(),
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		wrapper.find('button').first().simulate('click');
		expect(props.onUndo).toBeCalled();
	});
	it('if Redo button is clicked then onRedo callback is called', () => {
		const props: IUndoRedoBoardProps = {
			canUndo: false,
			canRedo: true,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: jest.fn()
		};
		const wrapper = shallow(<UndoRedoBoard {...props} />);
		wrapper.find('button').at(1).simulate('click');
		expect(props.onRedo).toBeCalled();
	});
});
