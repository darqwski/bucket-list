import React, { useContext } from 'react';
import { CookiesContext } from '../../context/cookies-manager/CookiesContext';
import './cookies-information.less';

const CookiesInformation: React.FC = () => {
	const { setAllowed } =useContext(CookiesContext);
	return (
		<div className="cookie-container">
			<p>Strona używa plików cookie do przechowywania informacji na temat oglądniętych artykułów i dodanych komentarzy</p>
			<p>Akceptacja jest konieczna do dodania komenetarzy</p>
			<p>
				<span>Czy wyrażasz zgodę na na korzystanie z plików Cookie?</span>
				<a className="btn green cookies-positive" onClick={()=>setAllowed(true)}>Tak</a>
				<a className="cookies-negative" onClick={()=>setAllowed(false)}>Nie</a>
			</p>
		</div>
	);
};

export default CookiesInformation;
