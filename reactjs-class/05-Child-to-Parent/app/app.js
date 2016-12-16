// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
var Seymore = require('./components/Seymore')

// This code here allows us to render our main component (in this case "Parent")
ReactDOM.render(	<Seymore />, document.getElementById('app'));