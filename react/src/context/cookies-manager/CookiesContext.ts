import { createContext, Dispatch, SetStateAction } from 'react';

interface ICookiesContext {
    allowed?: boolean;
    setAllowed: Dispatch<SetStateAction<boolean | undefined>>
}

export const CookiesContext = createContext<ICookiesContext>({
	setAllowed(){}
});
