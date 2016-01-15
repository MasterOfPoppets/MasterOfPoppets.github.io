import React from 'react';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import {createHistory, createMemoryHistory} from 'history';
import {Router, RoutingContext, match} from 'react-router';

import routes from './Routes.jsx';

if (typeof document !== 'undefined') {
	const history = createHistory();

	render(<Router history={history} routes={routes} />, document);
}

export default (locals, callback) => {
	const history = createMemoryHistory();
	const location = history.createLocation(locals.path);

	match({routes, location}, (error, redirectLocation, renderProps) => {
		callback(null, '<!DOCTYPE html>' + renderToString(<RoutingContext {...renderProps} />));
	});
};
