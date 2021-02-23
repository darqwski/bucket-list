import React, { useEffect, useState } from 'react';
import { CookiesContext } from './CookiesContext';
import CookiesInformation from '../../application-components/cookies-information/CookiesInformation';


const cookiesAllowed = window.localStorage.getItem('cookies-allow');
const allowInitialValue = cookiesAllowed === null ? undefined : cookiesAllowed ==='true';

const CookiesManager: React.FC = ({ children }) => {
	const [allowed, setAllowed ] = useState<boolean | undefined>(allowInitialValue);
	
	useEffect(()=>{
		if(allowed!==undefined){
			window.localStorage.setItem('cookies-allow', allowed ? 'true' : 'false');
		}
	}, [allowed]);

	return (
		<CookiesContext.Provider value={{ allowed, setAllowed }}>
			{children}
			{allowed === undefined && (
				<CookiesInformation />
			)}
		</CookiesContext.Provider>
	);
};

export default CookiesManager;
