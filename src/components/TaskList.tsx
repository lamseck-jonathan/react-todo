import { Task } from "../interface/task.interface";
import TodoItem from "./TodoItem";

function TaskList({
	tasks,
	isDone,
	onToggle,
}: {
	tasks: Task[];
	isDone: boolean;
	onToggle: (task: Task) => void;
}) {
	return tasks.map((task, index) => {
		if (task.isDone === isDone) {
			return (
				<TodoItem task={task} onToggle={() => onToggle(task)} key={index} />
			);
		}
		return null;
	});
}

export default TaskList;
