import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './footer.less';
import { AppContext } from '../../context/AppManager';
import { APP_NAME } from '../../config/app-config';

const Footer = () => {
	const { appData } = useContext(AppContext);

	return (
		<footer className="footer">
			<div className="flex">
				{Object.entries(appData.footerContent).map(([footerColumn, items], columnIndex)=>(
					<div key={`footer-col-${columnIndex}`} className="flex-grow">
						<p className="col-title">{footerColumn}</p>
						{items.map(({ title, infoPageId }, itemIndex)=>(
							<p key={`footer-link-${columnIndex}-${itemIndex}`}>
								<a href={`/${APP_NAME}/info?page=${infoPageId}`}>{title}</a>
							</p>
						))}
					</div>
				))}
			</div>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;
