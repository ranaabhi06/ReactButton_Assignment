import React from "react";
import Button from "./Components/Button";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<div>
				<header className="app_header_css">
					<b>Button</b>
				</header>
				<div>
					{/* <Button
					// width="100px"
					// label="Gaint"
					/> */}
					<Button />
					<Button />
				</div>
			</div>
		);
	}
}

export default App;
