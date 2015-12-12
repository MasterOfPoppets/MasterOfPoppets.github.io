import React, {Component} from 'react';
import {render} from 'react-dom';
import {portfolio} from '../../build/collections';

const PortfolioItem = ({title, path, tags, logo}) => {
	var url = path.split('/')[1];
	return (
		<li className="col-xs-6 portfolio-item" key={title}>
			<a href={url}>
				<div className="portfolio-item-link">
					<img src={logo} alt="Portfolio logo"/>
				</div>
			</a>
			<div className="is-centre">{tags}</div>
		</li>
	);
};

const Portfolio = ({portfolio}) => (
	<ul className="row">
		{portfolio.map(PortfolioItem)}
	</ul>
);

render(<Portfolio portfolio={portfolio}/>, document.getElementById('react'));
