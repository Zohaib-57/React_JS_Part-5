import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count);

	return (
		<div className="flex items-center justify-center">
			<div className="border border-black p-8 rounded-md h-[200px]">
				<h1 className="text-3xl font-semibold text-center">Counter: {count}</h1>
				<div className="mt-6">
				<button
					onClick={() => dispatch({ type: "INCREMENT" })}
					className="border border-red-600 px-2 py-1 m-4 rounded-lg"
				>
					Increment
				</button>
				<button
					onClick={() => dispatch({ type: "DECREMENT" })}
					className="border border-red-600 px-2 py-1 m-4 rounded-lg"
				>
					Decrement
				</button>
				<button
					onClick={() => dispatch({ type: "INCREMENT-BY-AMOUNT", payload: 5 })}
					className="border border-red-600 px-2 py-1 m-4 rounded-lg"
				>
					Increment-by-Amount-(5)
				</button>
				<button
					onClick={() => dispatch({ type: "RESET" })}
					className="border border-red-600 px-2 py-1 m-4 rounded-lg"
				>
					Reset
				</button>
				</div>
				
			</div>
		</div>
	);
};

export default Counter;
