import React, { FormEvent } from 'react';
import FormDataManager, { useFormDataContext } from '../../context/form-data-manager/FormDataManager';
import FormInput from '../../components/forms/FormInput';
import appRequest from '../../utils/appRequest';
// @ts-ignore
import { useSnackbar } from '../../context/SnackBarManager';
import { ICommentAddForm } from './types';

const CommentAddForm: React.FC<ICommentAddForm> = ({ articleId, refresh }) => {
	const { addSnackBar } = useSnackbar();
	const { formData: { text }, clearForm } = useFormDataContext();
	const sendComment = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(text === '') {
			return;
		}
		appRequest({
			method: 'POST',
			url: '/API/comments/',
			data: { text, articleId }
		}).then(({ data: { message }, status })=>{
			if(status !== 200){
				addSnackBar({ text: message });
			} else {
				refresh();
			}
			clearForm();
		}).catch((error)=>{
			console.log(error);
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

const CommentAddFormWithContext = ({ articleId, refresh }: { articleId: string|number, refresh():void })=>(
	<FormDataManager initialData={{}}>
		<CommentAddForm articleId={articleId} refresh={refresh} />
	</FormDataManager>
);


export default CommentAddFormWithContext;
