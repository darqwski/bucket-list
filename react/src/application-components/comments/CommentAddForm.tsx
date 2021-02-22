import React, { FormEvent } from 'react';
import FormDataManager, { useFormDataContext } from '../../context/form-data-manager/FormDataManager';
import FormInput from '../../components/forms/FormInput';
import appRequest from '../../utils/appRequest';

interface ICommentAddForm {
	articleId: string | number;
	refresh():void;
}

const CommentAddForm: React.FC<ICommentAddForm> = ({ articleId, refresh }) => {
	const { formData: { text }, clearForm } = useFormDataContext();
	const sendComment = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		appRequest({
			method: 'POST',
			url: '/API/comments/',
			data: { text, articleId }
		}).then(()=>{
			clearForm();
			refresh();
		});
	};
	return (
		<form className="comment-add-form" onSubmit={sendComment}>
			<div className="comment-add-author"/>
			<div className="comment-add-text">
				<FormInput label="Treść komentarza" name="text" />
			</div>
			<div className="comment-add-button">
				<button className="btn light-blue" type="submit">Dodaj</button>
			</div>
		</form>
	);
};

export default ({ articleId, refresh }: { articleId: string|number, refresh():void })=>(
	<FormDataManager initialData={{}}>
		<CommentAddForm articleId={articleId} refresh={refresh} />
	</FormDataManager>
);
