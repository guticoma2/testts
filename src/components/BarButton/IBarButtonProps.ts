import { IDimension } from '../../common';

export default interface IBarButtonProps {
	id: string;
	backgroundColor?: string;
	dimension: IDimension;
	selected: boolean;
	onSelect?(value: string): void;
}
