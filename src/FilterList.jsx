import React, { useState, useMemo } from "react";

function FilterList() {
	const [query, setQuery] = useState("");
	const items = ["Apple", "Banana", "Grapes", "Mango", "Orange"];

	const filteredItems = useMemo(() => {
		console.log("Filtering...");
		return items.filter((item) =>
			item.toLowerCase().includes(query.toLowerCase())
		);
	}, [query, items]);

	return (
		<div>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search..."
			/>
			<ul>
				{filteredItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default FilterList;
