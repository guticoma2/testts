export default (...arrs: string[]) => {
	let result = '';
	if (arrs) {
		arrs.forEach((className = '') => {
			result = `${ result.trim() } ${ className.trim() }`;
		});
	}
	// cleanup duplicates
	result = result.split(' ').filter((elem, pos, arr) => arr.indexOf(elem) === pos).join(' ');

	return result;
};