import React, {useEffect, useState} from 'react';
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
	const [page, setPage] = useState(0);
	const [summarizedComments, setSummarizedComments] = useState<IComment[]>([]);
	const { data, loading, refresh } = useAppRequest({ url: `/API/comments?articleId=${articleId}&page=${page}`, deps: [page] });
	useEffect(()=>{
		if(data && !loading){
			setSummarizedComments([...summarizedComments, ...data]);
		}
	}, [data, loading])

	return (
		<div className="card container comments">
			<h5>Komentarze</h5>
			{loading ? <Loading /> : summarizedComments && summarizedComments.map((comment,i)=><SingleComment key={`SingleComment-${i}`} comment={comment}/>)}
			{<CommentAddForm articleId={articleId} refresh={refresh} />}
			{data && data.length === 25 && <a onClick={()=>setPage(page+1)}>Więcej komentarzy</a>}
			{data && data.length !== 25 && <p>To wszystkie komentarze</p>}
		</div>
	);
};

export default Comments;
