import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="flex justify-between items-center p-4">
			<p>Current Theme: {theme}</p>
			{theme === "light" ? (
				<button onClick={toggleTheme}>Switch to Dark</button>
			) : (
				<button onClick={toggleTheme}>Switch to Light</button>
			)}
		</div>
	);
};

export default Navbar;
