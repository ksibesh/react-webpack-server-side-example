import React from 'react';
import './Application.css';
import './Application.scss';

class Application extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="application">
				<h1>Hello World</h1>
				<pre>{this.props.url}</pre>
				<img src={require("./image.png")} height="100" />
				<img src={require("./image.jpg")} height="100" />
				<div className="sampleStyle"></div>
			</div>
		);
	}
}

export default Application;
