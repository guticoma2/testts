import * as React from 'react';
import { shallow } from 'enzyme';
import UndoRedoBoard, { IUndoRedoBoardProps } from '../';

it('Bar is rendered', () => {
	const props: IUndoRedoBoardProps = {
		canUndo: false,
		canRedo: false,
		// tslint:disable-next-line:no-empty
		onUndo: () => { },
		// tslint:disable-next-line:no-empty
		onRedo: () => { }
	};
	const barWrapper = shallow(<UndoRedoBoard {...props} />);
	expect(barWrapper.find(UndoRedoBoard));
});