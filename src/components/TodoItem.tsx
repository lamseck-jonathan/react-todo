import { Task } from "../interface/task.interface";
import { Card, Checkbox } from "@mui/material";

interface TodoItemProps {
	task: Task;
	onToggle: (task: Task) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle }) => {
	return (
		<>
			<Card className="flex items-center pl-4 pr-8 w-full" variant="outlined">
				<span className="flex items-center w-full">
					<Checkbox checked={task.isDone} onChange={() => onToggle(task)} />
					<div className={task.isDone ? "task-done" : ""}>{task.name}</div>
				</span>
			</Card>
		</>
	);
};

export default TodoItem;
