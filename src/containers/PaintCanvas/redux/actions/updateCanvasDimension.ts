import { Actions } from '../../../../redux/actions';
import { IDimension } from '../../../../common';

export interface IUpdateCanvasDimensionAction {
	type: string;
	dimension: IDimension;
}

export default (dimension: IDimension): IUpdateCanvasDimensionAction => ({
	type: Actions.UpdateCanvasDimension,
	dimension
});
