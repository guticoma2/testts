// We ignore code coverage because this is a direct access to native browser functions

// source from: http://stackoverflow.com/questions/1955048/get-computed-font-size-for-dom-element-in-js
export default (el: HTMLElement, styleProp: string) =>
// Just support for IE > 9 and other browser. More compatibility not needed:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
document.defaultView.getComputedStyle(el, undefined)
							.getPropertyValue(styleProp);