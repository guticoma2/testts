export default interface IColorBoardProps {
	colors: string[];
	selected: string;
	onSelect?(value: string): void;
}
