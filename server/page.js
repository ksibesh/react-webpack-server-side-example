import React from "react";
import ReactDOM from 'react-dom/server';
import Application from "../app/Application";
import styleCollector from "./style-collector";

module.exports = function(req, scriptFilename) {

	var html;
	var css = styleCollector.collect(function() {
		html = ReactDOM.renderToString(<Application url={req.url}/>);
	});
	return ReactDOM.renderToString(
		<html>
			<head>
				<style id="server-side-style" dangerouslySetInnerHTML={{__html: css}} />
			</head>
			<body>
				<div id="content" dangerouslySetInnerHTML={{__html: html}} />
				<script src={"assets/" + scriptFilename}></script>
			</body>
		</html>
	);
}
