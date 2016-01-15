import React from 'react';
import R from 'ramda';
import {portfolio} from '../data';

const getPortfolioItem = item => R.filter(R.propEq('url', item), portfolio)[0];

const PortfolioItem = React.createClass({
	getInitialState() {
		return {
			component: require('../src/portfolio/' + this.props.routeParams.item + '.jsx').default
		};
	},

	render() {
		const portolioItem = getPortfolioItem(this.props.routeParams.item);

		return (
			<div className="portfolio-content">
				<div className="jumbotron" style={{backgroundColor: portolioItem.logo.background}}>
					<div className="container">
						<h1 style={{color: portolioItem.logo.colour}}>{portolioItem.title}</h1>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-8 col-md-offset-2">
							{this.state.component}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default PortfolioItem;
