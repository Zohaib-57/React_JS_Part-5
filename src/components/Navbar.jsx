import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<nav
			className={`shadow-md ${
				theme === "light" ? "bg-blue-600" : "bg-gray-800"
			}`}
		>
			<div className="container mx-auto flex justify-between items-center py-4 px-6">
				<Link to="/" className="text-2xl font-semibold text-white">
					Home
				</Link>
				<div className="flex items-center space-x-4">
					<Link to="/comments" className="hover:text-gray-300 text-white">
						Comments
					</Link>
					<Link to="/counter" className="hover:text-gray-300 text-white">
						Counter
					</Link>
					<button
						onClick={toggleTheme}
						className="px-4 py-2 rounded-md bg-gray-100 text-blue-600 hover:bg-gray-200"
					>
						{theme === "light" ? "Switch to Dark" : "Switch to Light"}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
