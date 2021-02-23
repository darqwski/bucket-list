import React, { useContext } from 'react';
import { Switch } from 'react-materialize';
import { CookiesContext } from '../../../context/cookies-manager/CookiesContext';

interface ICookiesInformationPage {

}

const CookiesInformationPage: React.FC<ICookiesInformationPage> = () => {
	const { setAllowed, allowed } = useContext(CookiesContext);
	return (
		<div>
			<h5>Czym są pliki Cookies?</h5>
			<div className="card">
				Jest to sposób przechowywania danych na komputerze użytkownika strony. Różne strony wykorzystują informacje w różne sposoby.
				Dla ścisłości, strona używa tylko jednego pliku Cookie a reszta opiera się o LocalStorage. Nie wiem czy jest to konieczna informacja ale ją napisze.
				Nikt i tak nie czyta polityki ciasteczek
			</div>
			<h5>Do czego są używane pliki Cookies na tej stronie</h5>
			<div className="card">
				Strona Bucket-List używa ich do przechowywania informacji o dodanych komentarzach niezalogowanych użytkowników, informacji o logowaniu
				użytkowników na stronie oraz do samego ustawienia plików Cookies. Po wyłączeniu ciasteczek, wszystkie te funkcje będą niedostępne
			</div>
			<h5>Twoje ustawienia cookies</h5>
			<div className="card">
				<Switch offLabel="Zabronione" onLabel="Zezwolone" checked={allowed} onChange={()=>setAllowed(i=>!i)} />
				<p>Wprowadzone zmiany zostaną zapamiętane do momentu wyczysczenia historii na tym urządzaniu</p>
			</div>
		</div>
	);
};

export default CookiesInformationPage;
