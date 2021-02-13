import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const footerContent = document.getElementById('react-footer-content')?.innerHTML;

ReactDOM.render(<App appData={{
	footerContent: footerContent ? JSON.parse(footerContent) : undefined
}} />, document.getElementById('react-app'));
