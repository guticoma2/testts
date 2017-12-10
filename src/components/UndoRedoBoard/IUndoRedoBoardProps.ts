export default interface IUndoRedoBoardProps {
	canUndo: boolean;
	canRedo: boolean;
	onUndo: () => void;
	onRedo: () => void;
}
