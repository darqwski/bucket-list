import React from 'react';
import { useFormDataContext } from '../../context/form-data-manager/FormDataManager';
// @ts-ignore
import WithLabel from './WithLabel';

interface IFormInput {
	label: string, name: string, white?: boolean
}

const FormInput: React.FC<IFormInput> = ({ label, name, white, ...rest }) => {
	const { setField, formData: { [name]: value } } = useFormDataContext();

	return (
		<WithLabel label={label} white={white}>
			<input name={name} onChange={setField(name)} value={value || ''} {...rest} />
		</WithLabel>
	);
};

export default FormInput;
