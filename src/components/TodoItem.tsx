import { Card, Checkbox } from "@mui/material";
import { Task } from "../interface/task.interface";

interface TodoItemProps {
	task: Task;
	onToggle: (task: Task) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle }) => {
	return (
		<>
			<Card
				className="flex justify-between items-center pl-4 pr-8 w-full"
				variant="outlined"
			>
				<Checkbox checked={task.isDone} onChange={() => onToggle(task)} />
				<div className={task.isDone ? "task-done" : ""}>{task.name}</div>
			</Card>
		</>
	);
};

export default TodoItem;
