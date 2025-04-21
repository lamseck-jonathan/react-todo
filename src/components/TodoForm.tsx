import {
	TextField,
	Button,
	Card,
	CardContent,
	Chip,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Task } from "../interface/task.interface";
import { useState } from "react";

interface TodoFormProps {
	task: Task;
	onValueChange: (newValue: string) => void;
	onAddTask: (task: Task) => void;
}

function TodoToggleButton({ onToggleButton }: { onToggleButton: () => void }) {
	return (
		<Button onClick={() => onToggleButton()} variant="contained">
			Add Tasks
		</Button>
	);
}

function TodoInput({ task, onAddTask, onValueChange }: TodoFormProps) {
	return (
		<Card>
			<CardContent>
				<div className="flex justify-between items-center w-full">
					<div>
						<TextField
							id="outlined-basic"
							label="Outlined"
							variant="outlined"
							value={task.name}
							className="w-full"
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

						<IconButton aria-label="delete">
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
			</CardContent>
		</Card>
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
		<Card>
			<CardContent>
				<div className="flex items-center w-full">
					<div>Task todo</div>
					<Chip
						style={{
							marginLeft: "20px",
						}}
						label="Done"
						color="primary"
					/>
				</div>
				<div className="flex justify-between items-center w-full">
					{showInput ? (
						<TodoInput
							task={task}
							onAddTask={onAddTask}
							onValueChange={onValueChange}
						/>
					) : (
						<TodoToggleButton onToggleButton={handleToggle} />
					)}
				</div>
			</CardContent>
		</Card>
	);
};

export default TodoForm;
