import React from 'react';
import './comments.less';
import SingleComment from './SingleComment';
import CommentAddForm from './CommentAddForm';
import useAppRequest from '../../hooks/useAppRequest';
// @ts-ignore
import Loading from '../../components/loading/Loading';
import { IComment } from './types';
interface IComments {
    articleId: string
}



const Comments: React.FC<IComments> = ({ articleId }) => {
	const { data, loading, refresh } = useAppRequest({ url: `/API/comments?articleId=${articleId}` });
	const comments: IComment[] = data;
	return (
		<div className="card container comments">
			<h5>Komentarze</h5>
			{loading ? <Loading /> : comments && comments.map((comment,i)=><SingleComment key={`SingleComment-${i}`} comment={comment}/>)}
			{<CommentAddForm articleId={articleId} refresh={refresh} />}
		</div>
	);
};

export default Comments;
