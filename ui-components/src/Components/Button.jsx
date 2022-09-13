import React from "react";
import "../App.css";
import Name from "./Name";
import SizeOfButton from "./SizeOfButton";

const Button = (props) => {
	// const name = props.label;
	// console.log(name);

	// const size = props.width;
	// console.log(size);
	return (
		<div>
			<div className="app_css">
				<div className="size_css">
					Size
					<Name name="Giant" />
					<Name name="Big" />
					<Name name="Medium" />
					<Name name="Small" />
				</div>
				<hr />
				<div className="button_css">
					<div className="button_css">Button</div>
					<div className="size_buttonCss">
						<SizeOfButton size="60px" />
						<SizeOfButton size="50px" />
						<SizeOfButton size="40px" />
						<SizeOfButton size="30px" />
					</div>
				</div>
				<hr />
				<br />
			</div>
		</div>
	);
};

export default Button;
