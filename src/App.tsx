import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { getEmptyTask } from "./utils/getEmptyTask.util";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import TaskList from "./components/TaskList";
import { Task } from "./interface/task.interface";

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
				<TodoContainer title="TO DO" status="Done">
					<TodoForm
						task={task}
						onValueChange={handleValueChange}
						onAddTask={handleAddTask}
					/>

					<ul className="flex flex-col gap-4 w-full">
						<TaskList
							onToggle={handleToggleTask}
							tasks={tasks}
							isDone={false}
						/>
					</ul>
				</TodoContainer>

				<TodoContainer title="DONE" status="Done">
					<ul className="flex flex-col gap-4 w-full">
						<TaskList onToggle={handleToggleTask} tasks={tasks} isDone={true} />
					</ul>
				</TodoContainer>
			</div>
		</MainLayout>
	);
}

export default App;
