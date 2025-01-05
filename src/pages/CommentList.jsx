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
			<p className="text-center text-lg text-gray-500">Loading comments...</p>
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
						<p className="text-sm text-gray-500 mt-4">By: {comment.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CommentList;


// Alternative solution using async/await syntax:
// import React, { useState } from 'react';
// import axios from 'axios';

// function AddUser() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
//         name: name
//       });
//       setMessage('User added successfully!');
//     } catch (error) {
//       setMessage('Error adding user.');
//     }
//   };

//   return (
//     <div>
//       <h1>Add User</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter Name" 
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default AddUser;

// useEffect(() => {
// 	const fetchData = async () => {
// 	  try {
// 		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
// 		setUsers(response.data);
// 	  } catch (error) {
// 		setError('Error fetching data');
// 	  }
// 	};
// 	fetchData();
//   }, []);



//using the following code for fetching data using fetch().
// useEffect(() => {
// 	const fetchData = async () => {
// 	  try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// 		if (!response.ok) throw new Error('Network response was not ok');
// 		const data = await response.json();
// 		setUsers(data);
// 	  } catch (error) {
// 		setError('Error fetching data');
// 	  }
// 	};
// 	fetchData();
//   }, []);