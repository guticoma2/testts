export default interface ISizeBoardPropsISizeBoardProps {
	sizes: number[];
	selected: number;
	onSelect?(value: string): void;
}
