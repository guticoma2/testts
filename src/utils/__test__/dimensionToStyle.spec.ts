import dimensionToStyle from '../dimensionToStyle';

describe('dimensionToStyle conversions', () => {
	it('passing height and width with px units as parameters returns height and width in px', () => { 
		const properConversion = {
			height: '100px',
			width: '100px'
		};
		const result = dimensionToStyle({ width: 100, height: 100 }, 'px');
		expect(result).toMatchObject(properConversion);
	});
	it('passing just height with px return value has height in px but width is set to auto', () => {
		const properConversion = {
			height: '100px',
			width: 'auto'
		};
		const result = dimensionToStyle({ height: 100 }, 'px');
		expect(result).toMatchObject(properConversion);
	});
	it('passing just width with px return value has width in px but height is set to auto', () => {
		const properConversion = {
			height: 'auto',
			width: '100px'
		};
		const result = dimensionToStyle({ width: 100 }, 'px');
		expect(result).toMatchObject(properConversion);
	});
	it('passing height and width with units as rem then return height and width with this units', () => {
		const properConversion = {
			height: '100rem',
			width: '100rem'
		};
		const result = dimensionToStyle({ height: 100, width: 100 }, 'rem');
		expect(result).toMatchObject(properConversion);
	});
	it('passing height and width but no units then height and width are expressed in px', () => {
		const properConversion = {
			height: '100px',
			width: '100px'
		};
		const result = dimensionToStyle({ height: 100, width: 100 }, '');
		expect(result).toMatchObject(properConversion);
	});
});		