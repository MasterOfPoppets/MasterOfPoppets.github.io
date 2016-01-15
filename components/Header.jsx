import React from 'react';
import {Link} from 'react-router';

const Header = () => (
	<header className="header">
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link to="/" className="navbar-brand glyphicon glyphicon-home home-menu-link" aria-hidden="true" />
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/about" className="home-menu-link">About</Link></li>
						<li><Link to="/portfolio" className="home-menu-link">Work</Link></li>
						<li><Link to="/blog" className="home-menu-link">Blog</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
