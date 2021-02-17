import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const footerContent = document.getElementById('react-footer-content')?.innerHTML;
const userData = document.getElementById('react-user-data')?.innerHTML;

ReactDOM.render(<App appData={{
	footerContent: footerContent ? JSON.parse(footerContent) : undefined,
	userData: userData ? JSON.parse(userData) : undefined,
}} />, document.getElementById('react-app'));
