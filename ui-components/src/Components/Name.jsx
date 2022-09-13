import React from "react";
import "../App.css";

const Name = (props) => {
	const name = props.name;
	console.log(name);
	return (
		<div>
			<label className="labal_css">{name}</label>
		</div>
	);
};

export default Name;
