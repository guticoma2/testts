import { Actions } from '../../../../redux/actions';

export interface IChangeColorAction {
	type: string;
	color: string;
}

export default (color: string): IChangeColorAction => ({
	type: Actions.ChangeColor,
	color
});
