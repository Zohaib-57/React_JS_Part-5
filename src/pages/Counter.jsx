import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count); 

	return (
		<div className="flex items-center justify-center border border-black m-10 ">
			<div>
				<button
					onClick={() => dispatch({ type: "INCREMENT" })}
					className="border border-black px-2 py-1 m-4 rounded-lg"
				>
					Increment
				</button>
				<h1 className="text-3xl font-semibold m-3">Counter: {count}</h1>
				<button
					onClick={() => dispatch({ type: "DECREMENT" })}
					className="border border-black px-2 py-1 m-4 rounded-lg"
				>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default Counter;
