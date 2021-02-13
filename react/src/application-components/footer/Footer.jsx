import React from 'react';
import PropTypes from 'prop-types';
import './footer.less';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="flex">
				<div className="flex-grow">
					<p className="col-title">O stronie</p>
					<p>
						<a> Co to jest BucketList</a>
					</p>
					<p>
						<a> Własny bucket list</a>
					</p>
					<p>
						<a> Jak zacząć spełniać postanowienia? </a>
					</p>
				</div>
				<div className="flex-grow">
					<p className="col-title">Polityka prywatności</p>
					<p><a>Pliki Cookies</a></p>
					<p><a>Reklamy</a></p>
				</div>
				<div className="flex-grow">
				</div>
				<div className="flex-grow">
					<p className="col-title">Kontakt</p>
					<p><a>Formularz zadawania pytań</a></p>
					<p><a>Mail</a></p>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;
