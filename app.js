import React, {Component} from 'react';
import {render} from 'react-dom';
import {caseStudies} from './build/collections';

const caseStudy = ({title}) => (<li key={title}>{title}</li>);

class Welcome extends Component {
	render() {
		return (
			<ul>
				{this.props.caseStudies.map(caseStudy)}
			</ul>
		);
	}
}

render(<Welcome caseStudies={caseStudies}/>, document.getElementById('react'));
