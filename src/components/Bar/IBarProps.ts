import { IDimension } from '../../common';

export default interface IBarProps {
	id: string
	backgroundColor?: string,
	dimension: IDimension
	onSelect?(value: string): void
};
