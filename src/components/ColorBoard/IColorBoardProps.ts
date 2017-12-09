export default interface IColorBoardProps {
	colors: string[]
	onSelect?(value: string): void
	selected: string
};
