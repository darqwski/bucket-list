import React, { useEffect } from 'react';
import useAppRequest from '../../../../hooks/useAppRequest';
import Loading from '../../../../components/loading/Loading';
import FormDataManager, { useFormDataContext } from '../../../../context/form-data-manager/FormDataManager';
import { useSnackbar } from '../../../../context/SnackBarManager';
import appRequest from '../../../../utils/appRequest';
import FormInput from '../../../../components/forms/FormInput';

const infoPageName = (new URL(location.href)).searchParams.get('pageId');

const EditInfoPage = () => {
	const { formData, setField } = useFormDataContext();
	const { addSnackBar } = useSnackbar();

	useEffect(()=>{
		if(formData.type === 'html'){
			document.querySelector('.article-preview').innerHTML = formData.contentHTML;
		}
	}, [formData.contentHTML]);

	const onSave = () => {
		appRequest({
			url: '/API/manage-info-pages/edit-info-page/',
			method: 'POST',
			data: {
				...formData,
				content: formData.type === 'jsx' ? formData.content : formData.contentHTML
			}
		}).then(({ data: { message } })=> {
			addSnackBar({ text: message });
		});
	};
	return (
		<div className="container">
			<h3>Edytowanie strony informacyjnej do stopki</h3>
			<div className="card">
				<h4>Dane do stopki</h4>
				<FormInput name="title" label="Nazwa" />
				<FormInput name="footerColumns" label="Kolumna w stopce" />
			</div>
			<div className="card">
				<h4>Dane strony</h4>
				<label>
					<input
						type="radio"
						className="filled-in"
						name="type"
						value="html"
						onChange={setField('type')}
						checked={formData.type ==='html'}
					/>
					<span>Zwykła strona HTML</span>
				</label>
				<label>
					<input
						type="radio"
						className="filled-in"
						name="type"
						value="jsx"
						onChange={setField('type')}
						checked={formData.type ==='jsx'}
					/>
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
				<a className="btn light-blue" onClick={onSave}> Zapisz stronę informacyjną </a>
			</div>
		</div>
	);
};

EditInfoPage.propTypes = {};

export default () => {
	const { data, loading } = useAppRequest({
		url: `/API/info/pages?pageId=${infoPageName}`
	});
	return loading ? <Loading/> : (
		<FormDataManager initialData={{ ...data, contentHTML: data.content }}>
			<EditInfoPage />
		</FormDataManager>
	);
};
