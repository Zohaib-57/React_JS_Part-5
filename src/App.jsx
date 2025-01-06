import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentList from "./pages/CommentList";
import Home from "./pages/Home";
import FilterList from "./FilterList";
import Counter from "./pages/Counter";
import "./index.css";

export default function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<div className="min-h-screen flex flex-col">
					<Navbar />
					<div className="container mx-auto py-8">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/comments" element={<CommentList />} />
							<Route path="/counter" element={<Counter />} />
						</Routes>
					</div>
				</div>
				<div className="bottom-0 w-full bg-gray-200 px-4 py-2 text-sm text-gray-600">
					�� 2023 My-App. All rights reserved.
				</div>
				<div></div>
			</BrowserRouter>
		</ThemeProvider>
	);
}
