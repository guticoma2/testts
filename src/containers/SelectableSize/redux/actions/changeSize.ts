import { Actions } from '../../../../redux/actions';

export interface IChangeSizeAction {
	type: string;
	size: number;
}

export default (size: number): IChangeSizeAction => ({
	type: Actions.ChangeSize,
	size
});
