import { Chip } from "@mui/material";
import React from "react";
import MainTitle from "./MainTitle";

function TodoContainer({
	children,
	title,
	status,
}: {
	children: React.ReactNode;
	title: string;
	status: string;
}) {
	return (
		<div className="todo-container">
			<div className="flex items-center w-full">
				<MainTitle>{title}</MainTitle>
				<Chip
					style={{
						marginLeft: "20px",
					}}
					label={status}
					color="primary"
				/>
			</div>
			{children}
		</div>
	);
}

export default TodoContainer;
