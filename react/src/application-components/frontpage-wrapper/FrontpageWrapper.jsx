import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../footer/Footer';

const FrontPageWrapper = ({ children }) => {
	return (
		<>
			<div className="nav-bar">
				<h1> My bucket list</h1>
				<h2>Rzeczy do zrobienia w ciągu życia</h2>
				<div className="nav-border"/>
			</div>
			{children}
			<Footer/>
		</>
	);
};


export default FrontPageWrapper;
