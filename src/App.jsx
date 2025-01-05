import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentList from "./pages/CommentList";
import Home from "./pages/Home";

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
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}
