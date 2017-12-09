import Actions from './Actions';

export interface IChangeSizeAction {
	type: string;
	size: number;
}

export default (size: number): IChangeSizeAction => ({
	type: Actions.ChangeSize,
	size
});
