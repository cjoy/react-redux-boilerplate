import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: [
				{
					title: "Cropian",
					type: "FinTech"
				},
				{
					title: "Create",
					type: "WebDev"
				},
				{
					title: "Birdi",
					type: "Aero"
				},
			]
		};
	}

	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<h2>{this.props.test}</h2>
			</div>
		);
	}
}

export default App;