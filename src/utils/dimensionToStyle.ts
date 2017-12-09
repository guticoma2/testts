import { IDimension, ICssDimension } from '../common';

export default (dimension: IDimension, unit: string): ICssDimension =>
	({ 
		width: dimension.width ? `${ dimension.width }${ unit }` : 'auto',
		height: dimension.height ? `${ dimension.height }${ unit }` : 'auto'
	});