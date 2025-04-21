import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="main-layout">
			{/* Header */}
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						MyTasks
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>

			{/* Main Content */}
			<Container className="main-container" maxWidth="lg" sx={{ my: 4 }}>
				{children}
			</Container>

			{/* Footer */}
			<footer
				style={{
					textAlign: "center",
					padding: "1rem 0",
					marginTop: "2rem",
					background: "#f5f5f5",
				}}
			>
				<Typography variant="body2" color="textSecondary">
					© 2024 My App. All rights reserved.
				</Typography>
			</footer>
		</div>
	);
}
