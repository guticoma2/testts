import { IDimension, ICssDimension } from '../common';

export default (dimension: IDimension, unit: string): ICssDimension =>
	({ 
		width: dimension.width ? `${ dimension.width }${ unit || 'px' }` : 'auto',
		height: dimension.height ? `${ dimension.height }${ unit || 'px' }` : 'auto'
	});