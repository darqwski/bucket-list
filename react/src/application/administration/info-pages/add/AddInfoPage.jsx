import React, { useEffect } from 'react';
import FormDataManager, { useFormDataContext } from '../../../../context/form-data-manager/FormDataManager';
import FormInput from '../../../../components/forms/FormInput';
import appRequest from '../../../../utils/appRequest';
import { useSnackbar } from '../../../../context/SnackBarManager';

const AddInfoPage = () => {
	const { formData, setField } = useFormDataContext();
	const { addSnackBar } = useSnackbar();

	useEffect(()=>{
		if(formData.type === 'html'){
			document.querySelector('.article-preview').innerHTML = formData.contentHTML;
		}
	}, [formData.contentHTML]);

	const onSave = () => {
		appRequest({
			url: '/API/manage-info-pages/add-info-page/',
			method: 'POST',
			data: {
				...formData,
				content: formData.type === 'jsx' ? formData.content : formData.contentHTML
			}
		}).then(({ data: { message } })=> {
			addSnackBar({ text: message });
			window.location.href='../';
		});
	};
	return (
		<div className="container">
			<h3>Dodawanie nowej strony informacyjnej do stopki</h3>
			<div className="card">
				<h4>Dane do stopki</h4>
				<FormInput name="title" label="Nazwa" />
				<FormInput name="footerColumns" label="Kolumna w stopce" />
			</div>
			<div className="card">
				<h4>Dane strony</h4>
				<label>
					<input type="radio" className="filled-in" name="type" value="html" onChange={setField('type')}/>
					<span>Zwykła strona HTML</span>
				</label>
				<label>
					<input type="radio" className="filled-in" name="type" value="jsx" onChange={setField('type')}/>
					<span>Specjalna strona w repozytorium</span>
				</label>
				{(formData.type === 'jsx') ? (
					<FormInput label="Nazwa komponentu w repozytorium" name="content" />
				) : (formData.type === 'html') ? (
					<div>
						<textarea onChange={setField('contentHTML')} value={formData.contentHTML}/>
						<div className="article-preview"/>
					</div>
				) : null}
				<a className="btn light-blue" onClick={onSave}> Dodaj artykuł </a>
			</div>
		</div>
	);
};

AddInfoPage.propTypes = {};

export default () => (
	<FormDataManager>
		<AddInfoPage />
	</FormDataManager>
);
