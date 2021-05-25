import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Route, HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

// Reducer
import rootReducer from '../src/core/reducer';
// Ui
import renderRoutes from '../src/core/ui/renderRoutes';
import { routes } from '../src/core/ui/routes';


const virtualPath = document.baseURI.replace(/^(https?:\/\/[^\/]+)?(.*)\/$/, '$2');
const historyOptions = { basename: `${virtualPath}` };
const history = createBrowserHistory(historyOptions);

declare const window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))(createStore)(rootReducer);

ReactDOM.render(
    <Provider store={ store }>
        <HashRouter store={ store } history={ history } >
            { renderRoutes(routes) }
        </HashRouter>
    </Provider>,
    document.getElementById('app'),
);
