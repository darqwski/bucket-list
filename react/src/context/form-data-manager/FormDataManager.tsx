import React, { useContext, useState } from 'react';
import { FormDataContext } from './FormDataContext';
import { IFormData, IFormDataManager } from './types';

export const useFormDataContext = () => useContext(FormDataContext);
const FormDataManager: React.FC<IFormDataManager> = ({ initialData = {}, children }) => {
	const [formData, setFormData] = useState<IFormData>(initialData);
	const [errorMessages, setErrorMessages] = useState<string[]>([]);
	const setField = (name: string) => ({ target: { value } }: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
		setFormData(data=>({ ...data, [name]: value }));
	};

	const addError = (message: string) => setErrorMessages((messages)=>[...messages, message]);
	const clearErrors = () => setErrorMessages([]);

	return (
		<FormDataContext.Provider value={{
			setField,
			formData,
			setFormData,
			addError,
			clearErrors,
			errorMessages
		}}>
			{children}
		</FormDataContext.Provider>
	);
};

export default FormDataManager;
