import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppManager = ({ children, appData }) => {
	const { serverData: { login, admin } } = window;
	const isLogged = () => !!login;
	const isAdmin = () => !!admin;

	return (
		<AppContext.Provider value={{
			isLogged, login, isAdmin, appData
		}}>
			{children}
		</AppContext.Provider>
	);
};

AppManager.propTypes = {
	children: PropTypes.node
};

export default AppManager;
