import * as React from 'react';
import ICoord from '../common/ICoord';

export default 
	<T extends HTMLElement, E extends  React.MouseEvent<T>>
		(ev: E, container: T): ICoord =>
		({ 
			x: ev.pageX - container.getBoundingClientRect().left - window.scrollX,
			y: ev.pageY - container.getBoundingClientRect().top - window.scrollY
		});
