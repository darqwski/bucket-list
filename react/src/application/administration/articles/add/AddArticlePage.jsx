import React from 'react';
import FormDataManager, { useFormDataContext } from '../../../../context/form-data-manager/FormDataManager';
import FormInput from '../../../../components/forms/FormInput';
import './add-article.less';
import appRequest from '../../../../utils/appRequest';
import { useModal } from '../../../../context/ModalManager';
import ArticleCreator from '../../../../application-components/article-creator/ArticleCreator';

const AddArticlePage = () => {
	const { formData } = useFormDataContext();
	const  { addModal } = useModal();

	const onSave = () => {
		appRequest({
			url: '/API/manage-articles/add-article/',
			method: 'POST',
			data: formData
		});
	};
	const onAbort = () => {
		addModal({
			title: 'Niezapisane zmiany',
			message: 'Czy na pewno chcesz wyjść z tworzenia artykułu? Artykuł nie zostanie zapisany',
			confirmAction: () => {
				location.href='../';
			}
		});
	};

	return (
		<div>
			<h3 className="add-article-title">Tworzenie nowego artykułu</h3>
			<div className="card row">
				<div className="col s3" />
				<div className="form-section col s6">
					<div className="col s12 card-title">Dane podstawowe</div>
					<FormInput label="Tytuł artykułu" name="title"/>
					<FormInput label="Krótki opis" name="shortDescription"/>
					<FormInput label="Zdjęcie" name="previewPhoto"/>
					<FormInput label="Opis do zdjęcia" name="previewCredits"/>
				</div>
				<div className="col s3" />
			</div>
			<div className="card row">
				<div className="col s12 card-title">Treść artykułu</div>
				<ArticleCreator name="article" />
			</div>
			<div className="card row">
				<div className="col s12 card-title">Szczegóły</div>
				<div className="col s3" />
				<div className="form-section col s6">
					<FormInput label="Cena" name="cost"/>
					<FormInput label="Data" type="date" name="date"/>
				</div>
				<div className="col s3" />
			</div>
			<button className="btn-flat light-blue darken-2" onClick={onSave}>Zapisz artykuł</button>
			<button className="btn-flat light-blue darken-2" onClick={onAbort}>Anuluj</button>
		</div>
	);
};

AddArticlePage.propTypes = {};

export default () => (
	<FormDataManager>
		<AddArticlePage />
	</FormDataManager>
);
