import * as React from 'react';
import ICoord from '../common/ICoord';

export default 
    <T extends HTMLElement, E extends  React.TouchEvent<T>>
        (ev: E, container: T): ICoord =>
    ({
         x: ev.changedTouches[0].pageX - container.getBoundingClientRect().left,
         y: ev.changedTouches[0].pageY - container.getBoundingClientRect().top
    });

