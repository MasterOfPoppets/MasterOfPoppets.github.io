import React, {Component} from 'react';
import {render} from 'react-dom';
import {portfolio} from './build/collections';

const caseStudy = ({title, path}) => {
		var url = path.split('/')[1];
		return (<li key={title}><a href={url}>{title}</a></li>);
};

class Welcome extends Component {
	render() {
		return (
			<ul>
				{this.props.portfolio.map(caseStudy)}
			</ul>
		);
	}
}

render(<Welcome portfolio={portfolio}/>, document.getElementById('react'));
