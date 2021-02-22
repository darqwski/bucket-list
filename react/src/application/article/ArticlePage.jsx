import React, { useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import useAppRequest from '../../hooks/useAppRequest';
import './article-page.less';
import FrontPageWrapper from '../../application-components/frontpage-wrapper/FrontpageWrapper';
import Comments from '../../application-components/comments/Comments';

const SingleArticleSection = ({ articleSection }) => {
	return (
		<>
			{ articleSection.type === 'title' &&  (
				<h3 className="article-subtitle">{articleSection.title}</h3>
			)}
			{ articleSection.type === 'content' &&  (
				<p className="article-content">{articleSection.content}</p>
			)}
			{ articleSection.type === 'image' &&  (
				<div className="article-image-container">
					<img className="article-image" src={articleSection.src} alt="img" />
					<p className="article-credits">{articleSection.credits}</p>
				</div>
			)}
		</>
	);
};

const ArticlePage = () => {
	const articleId = (new URL(location.href)).searchParams.get('id');
	const { data, loading } = useAppRequest({
		url: `/API/articles?id=${articleId}`
	});
	const { article, title, shortDescription, previewPhoto, creationDate, login } = data || {};

	return (
		<FrontPageWrapper>
			<div className="row">
				<article className="container article card">
					<div className="article-details">
						<span>Dodano</span>
						<span className="value"> {creationDate}</span>
						<span>przez</span>
						<span className="value">{login}</span>
					</div>
					<h4>{title}</h4>
					<p>{shortDescription}</p>
					<img src={previewPhoto} alt="img" />
					{loading ? <Loading/> : (
						article && JSON.parse(article).map((articleSection, index)=>(
							<SingleArticleSection key={`SingleArticleSection-${index}`} articleSection={articleSection} />
						))
					)}
				</article>
				<Comments articleId={articleId} />
			</div>
		</FrontPageWrapper>
	);
};

ArticlePage.propTypes = {};

export default ArticlePage;
