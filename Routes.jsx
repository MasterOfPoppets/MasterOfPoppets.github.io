import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Root from './components/Root.jsx';
import Index from './components/Index.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import PortfolioItem from './components/PortfolioItem.jsx';
import Blog from './components/Blog.jsx';
import BlogPost from './components/BlogPost.jsx';

const Routes = (
	<Router>
		<Route path="/" component={Root}>
			<IndexRoute component={Index} />
			<Route path="/about" component={About} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/portfolio/:item" component={PortfolioItem} />
			<Route path="/blog" component={Blog} />
			<Route path="/blog/:post" component={BlogPost} />
		</Route>
	</Router>
);

export default Routes;
