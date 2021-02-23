import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SnackBarManager from './context/SnackBarManager';
import routing from './config/routing';
import { ROUTER_APP_PREFIX } from './config/app-config';
import ModalManager from './context/ModalManager';
import AppManager from './context/AppManager';
import CookiesManager from './context/cookies-manager/CookiesManager';
import './css/index.less';

const App = ({ appData }) => {
	return (
		<CookiesManager>
			<AppManager appData={appData}>
				<ModalManager>
					<SnackBarManager>
						<Router>
							{routing.map(({ path, component }, index)=>(
								<Route
									exact
									path={`${ROUTER_APP_PREFIX}${path}`}
									component={component}
									key={`routing-${index}`}
								/>
							))}
						</Router>
					</SnackBarManager>
				</ModalManager>
			</AppManager>
		</CookiesManager>
	);
};

App.propTypes = {};

export default App;
