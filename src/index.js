// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import katex from 'katex';


// LATEX //

class TeX extends Component {

	/**
	* Create LaTeX equation.
	*/
	constructor() {
		super();
	}

	/**
	* React component render method.
	*/
	render() {
		let math = {
			__html:	katex.renderToString( this.props.raw, {
				displayMode: this.props.displayMode
			})
		};
		return (
			<div className="tex" style={this.props.style} onClick={this.props.onClick}>
			{ this.props.displayMode ? <span style={ {float: "right", marginTop: 5, marginRight: 5 } }>[{this.props.id}]</span> : <span /> }
			<span
				ref="katex"
				dangerouslySetInnerHTML={math}
				aria-hidden={!!math}
			/>
			</div>
		);
	}

}

// PROPERTY TYPES //

TeX.propTypes = {
	raw: React.PropTypes.string.isRequired,
	style: React.PropTypes.object,
	displayMode: React.PropTypes.bool,
	id: React.PropTypes.number,
	onClick: React.PropTypes.func
};


// DEFAULT PROPERTIES //

TeX.defaultProps = {
	onClick: null,
	displayMode: false,
	id: NaN,
	style: {}
};


// EXPORTS //

export default TeX;
