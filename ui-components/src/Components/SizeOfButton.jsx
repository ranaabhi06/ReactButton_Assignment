import React from "react";
import "../App.css";

const SizeOfButton = (props) => {
	return (
		<button
			className="prop_button_css"
			style={{ height: `${props.size}` }}>
			SUBMIT
		</button>
	);
};

export default SizeOfButton;
