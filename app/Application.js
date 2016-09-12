import React from 'react';
import './Application.css';
import './Application.scss';
import PngImage from './image.png';
import JpegImage from './image.jpg';
import SvgImage from './batman.svg';

class Application extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="application">
				<h1>Hello World</h1>
				<pre>{this.props.url}</pre>
				<img src={PngImage} height="100" />
				<img src={JpegImage} height="100" />
				<div className="sampleStyle"></div>
				<img src={SvgImage} height="100" />
			</div>
		);
	}
}

export default Application;
