import { IDimension } from '../../common';

export default interface IBarProps {
	id: string;
	backgroundColor?: string;
	dimension: IDimension;
	selected: boolean;
	onSelect?(value: string): void;
}
