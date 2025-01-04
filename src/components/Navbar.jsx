import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="flex justify-between items-center p-4">
			<p>Current Theme: {theme}</p>
			{theme === "light" ? (
				<button onClick={toggleTheme} className="border border-black px-2 py-1 rounded-md">Switch to Dark</button>
			) : (
				<button onClick={toggleTheme} className="border border-white px-2 py-1 rounded-md">Switch to Light</button>
			)}
		</div>
	);
};

export default Navbar;
