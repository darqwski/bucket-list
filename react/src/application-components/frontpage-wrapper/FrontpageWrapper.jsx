import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../nav-bar/NavBar';
const FrontPageWrapper = ({ children }) => {
	return (
		<>
			<NavBar/>
			{children}
			<Footer/>
		</>
	);
};


export default FrontPageWrapper;
