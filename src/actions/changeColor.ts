import Actions from './Actions';

export interface IChangeColorAction {
	type: string;
	color: string;
}

export default (color: string): IChangeColorAction => ({
	type: Actions.ChangeColor,
	color
});
