import { IDimension } from '../../../common';
import { getComputedStyle } from '../../../utils';

export default (el: HTMLCanvasElement): IDimension => ({
	width: parseInt(getComputedStyle(el, 'width'), 10),
	height: parseInt(getComputedStyle(el, 'height'), 10)
});
