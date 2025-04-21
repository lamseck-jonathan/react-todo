import { TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Task } from "../interface/task.interface";
import { useState } from "react";

interface TodoFormProps {
	task: Task;
	onValueChange: (newValue: string) => void;
	onAddTask: (task: Task) => void;
	onClose?: () => void;
}

function TodoToggleButton({ onToggleButton }: { onToggleButton: () => void }) {
	return (
		<Button onClick={() => onToggleButton()} variant="contained">
			Add Tasks
		</Button>
	);
}

function TodoInput({ task, onAddTask, onValueChange, onClose }: TodoFormProps) {
	return (
		<div className="todo-input">
			<div className="flex justify-between items-center w-full">
				<div className="todo-input__left">
					<TextField
						id="outlined-basic"
						label="Name of the task"
						variant="standard"
						size="small"
						fullWidth
						value={task.name}
						onChange={(e) => onValueChange(e.target.value)}
					/>
				</div>

				<div>
					{!task.name.trim() ? (
						<Button disabled variant="contained">
							Write first
						</Button>
					) : (
						<Button onClick={() => onAddTask(task)} variant="contained">
							Add tasks
						</Button>
					)}

					<IconButton onClick={() => onClose?.()} aria-label="delete">
						<CloseIcon />
					</IconButton>
					{/* 
            disabled props
            <Button
							disabled={!task.name.trim()}
							onClick={() => onAddTask(task)}
							variant="contained"
						>
							Add Tasks
						</Button> */}
				</div>
			</div>
		</div>
	);
}

const TodoForm: React.FC<TodoFormProps> = ({
	task,
	onAddTask,
	onValueChange,
}) => {
	const [showInput, setShowInput] = useState(false);

	function handleToggle() {
		setShowInput(!showInput);
	}
	return (
		<div className="flex justify-between items-center w-full">
			{showInput ? (
				<TodoInput
					task={task}
					onAddTask={onAddTask}
					onValueChange={onValueChange}
					onClose={handleToggle}
				/>
			) : (
				<TodoToggleButton onToggleButton={handleToggle} />
			)}
		</div>
	);
};

export default TodoForm;
