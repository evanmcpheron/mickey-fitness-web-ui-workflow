import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { PaletteDisplay } from './PaletteDisplay';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './Styles/import.scss';

let history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Router history={history}>
		<React.StrictMode>
			<PaletteDisplay />
		</React.StrictMode>
	</Router>
);
