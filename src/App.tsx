import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import TodoItem from "./components/TodoItem";
import { Task } from "./interface/task.interface";
import { getEmptyTask } from "./utils/getEmptyTask.util";
import TodoForm from "./components/TodoForm";

function App() {
	const [task, setTask] = useState<Task>(getEmptyTask());
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleAddTask = (newTask: Task) => {
		if (newTask.name.trim() !== "") {
			setTasks([...tasks, newTask]);
			setTask(getEmptyTask());
		}
	};

	const handleToggleTask = (task: Task) => {
		setTasks(
			tasks.map((t) => (t.name === task.name ? { ...t, isDone: !t.isDone } : t))
		);
	};

	const handleValueChange = (newValue: string) => {
		setTask({ name: newValue, isDone: false });
	};

	return (
		<MainLayout>
			<div>Task of the day</div>
			<div className="py-8 w-full">
				<TodoForm
					task={task}
					onValueChange={handleValueChange}
					onAddTask={handleAddTask}
				/>
			</div>

			<ul className="flex flex-col gap-4 w-full">
				{tasks.map((task, index) => (
					<TodoItem
						task={task}
						onToggle={() => handleToggleTask(task)}
						key={index}
					/>
				))}
			</ul>
		</MainLayout>
	);
}

export default App;
