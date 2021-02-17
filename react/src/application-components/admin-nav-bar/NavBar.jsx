import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../../context/AppManager';
import './nav-bar.less';
import { APP_NAME } from '../../config/app-config';

const NavBar = ({ title }) => {
	const { appData: { userData } } = useAppContext();
	return (
		<nav>
			<div className="my-nav flex">
				<div className="flex-grow">
					<a className="my-nav-link" href={`/${APP_NAME}administration/articles/`}>Artykuły</a>
					<a className="my-nav-link" href={`/${APP_NAME}administration/info-pages/`}>Strony informacyjny</a>
				</div>
				<div className="my-nav-title">{title}</div>
				<div className="flex-grow my-nav-right">
                    Zalogowany jako {userData.login}
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {};

export default NavBar;
