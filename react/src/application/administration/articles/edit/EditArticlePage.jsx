import React from 'react';
import FormDataManager, { useFormDataContext } from '../../../../context/form-data-manager/FormDataManager';
import FormInput from '../../../../components/forms/FormInput';
import appRequest from '../../../../utils/appRequest';
import useAppRequest from '../../../../hooks/useAppRequest';
import Loading from '../../../../components/loading/Loading';
import { useSnackbar } from '../../../../context/SnackBarManager';
import ArticleCreator from '../../../../application-components/article-creator/ArticleCreator';
import NavBar from '../../../../application-components/admin-nav-bar/NavBar';
import './edit-article.less';

const articleId = (new URL(location.href)).searchParams.get('id');

const EditArticlePage = () => {
	const { formData } = useFormDataContext();
	const { addSnackBar } = useSnackbar();

	const onSave = () => {
		appRequest({
			url: '/API/manage-articles/edit-article/',
			method: 'POST',
			data: formData
		}).then(({ data: { message } })=>{
			addSnackBar({ text: message });
		});
	};

	return (
		<div>
			<NavBar title="Edycja artykułu"/>
			<h3>Edycja artykułu</h3>
			<div className="row">
				<div className="col s3" />
				<div className="card form-section col s6">
					<div className="card-title">Informacje o artykule</div>
					<FormInput label="Tytuł artykułu" name="title"/>
					<FormInput label="Krótki opis" name="shortDescription"/>
					<FormInput label="Zdjęcie" name="previewPhoto"/>
					<FormInput label="Opis do zdjęcia" name="previewCredits"/>
				</div>
				<div className="col s3" />
			</div>
			<div className="row">
				<div className="card row">
					<div className="col s12 card-title">Treść artykułu</div>
					<ArticleCreator initialArticles={formData.article}  />
				</div>
			</div>
			<div className="row">
				<div className="col s3" />
				<div className="form-section card col s6">
					<div className="card-title">Szczegóły artykułu</div>
					<FormInput label="Cena" name="cost"/>
					<FormInput label="Data" type="date" name="date"/>
				</div>
				<div className="col s3" />
			</div>
			<div className="row card">
				<div className="col s3" />
				<div className="col s6">
					<button className="btn btn-large light-blue darken-2" onClick={onSave}>Zapisz artykuł</button>
				</div>
				<div className="col s3" />
			</div>
		</div>
	);
};

EditArticlePage.propTypes = {};

export default () => {
	const { data, loading } = useAppRequest({
		url: `/API/articles?id=${articleId}`
	});
	return loading ? <Loading/> : (
		<FormDataManager initialData={data}>
			<EditArticlePage />
		</FormDataManager>
	);
};
