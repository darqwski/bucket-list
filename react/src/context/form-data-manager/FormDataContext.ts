import React, { createContext } from 'react';
import { IFormDataContext } from './types';

export const FormDataContext =createContext<IFormDataContext>({
	setField: (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>  {
		console.log(name, event);
	},
	addError(error: string): void {
		console.log(error);
	},
	clearErrors(): void {
	},
	errorMessages: [],formData: {},setFormData:(data)=> data,
	clearForm(): void {}
});
