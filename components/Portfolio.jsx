import React from 'react';
import {Link} from 'react-router';
import {portfolio} from '../data';

const Portfolio = () => (
	<div className="container portfolio">
		<ul>
			{portfolio.map(item => (
				<li key={item.title} className="col-xs-12 col-md-6 portfolio-item">
					<Link to={`/portfolio/${item.url}`}>
						<div className="portfolio-item-link" style={{backgroundColor: item.logo.background}}>
							<img src={item.logo.image} alt="Portfolio logo" className="img-responsive center-block"/>
						</div>
					</Link>
					<div className="is-centre">React, Node, Full-Stack</div>
				</li>
			))}
		</ul>
	</div>
);

export default Portfolio;
