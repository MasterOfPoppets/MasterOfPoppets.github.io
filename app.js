import React, {Component} from 'react';
import {render} from 'react-dom';
import {portfolio} from './build/collections';

const caseStudy = ({title, path, tags}) => {
		var url = path.split('/')[1];
		return (<li key={title}><a href={url}>{title} - {tags}</a></li>);
};

const Portfolio = ({portfolio}) => (
	<ul>
		{portfolio.map(caseStudy)}
	</ul>
);

render(<Portfolio portfolio={portfolio}/>, document.getElementById('react'));
