// MODULES //

import React from 'react';
import ReactDOM from 'react-dom';
import TeX from './../src/index.js';


// MAIN EXAMPLE APP //

class App extends React.Component {
	render () {
		return (
			<div>
				<header>
				<h2><a href="https://github.com/cmu-isle/react-latex">React LaTeX Equations</a></h2>
				<p>Render LaTeX equations using katex from Khan Academy</p>
				<div id="box" style={ {backgroundColor: "lightgrey", width: 600, height: 300 } }>
					<span>This is an inline equation: </span>
					<TeX raw="\frac{\sqrt{9}}{3 \times 2}"/>
					<span>. Display mode is also supported:</span>
					<TeX raw="\int f(x^2) \; dx" displayMode={true} id={1} />
				</div>
				</header>
			</div>
		);
	}
}


// RENDER APP //

ReactDOM.render( <App />, document.querySelector( '#app' ) );
