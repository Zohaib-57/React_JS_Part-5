import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = () => {
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/comments")
			.then((response) => {
				setComments(response.data.slice(0, 15)); // Limiting to 10 comments
				setLoading(false);
			})
			.catch(() => {
				setError("Failed to fetch data");
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<p className="text-center text-lg text-gray-500">
				Loading comments...
			</p>
		);
	}

	if (error) {
		return <p className="text-center text-red-500">{error}</p>;
	}

	return (
		<div className="space-y-6">
			<h1 className="text-4xl font-bold text-center text-blue-600">
				Comment List
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{comments.map((comment) => (
					<div
						key={comment.id}
						className="p-6 border rounded-lg shadow-md bg-white"
					>
						<h3 className="text-xl font-semibold text-gray-800">
							{comment.name}
						</h3>
						<p className="text-gray-600 mt-2">{comment.body}</p>
						<p className="text-sm text-gray-500 mt-4">
							By: {comment.email}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CommentList;
