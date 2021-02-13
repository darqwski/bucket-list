import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/loading/Loading';
import useAppRequest from '../../hooks/useAppRequest';
import './article-page.less';
import NavBar from '../../application-components/nav-bar/NavBar';
import Footer from '../../application-components/footer/Footer';
import FrontPageWrapper from '../../application-components/frontpage-wrapper/FrontpageWrapper';

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
					<img className="article-image" src={articleSection.src} />
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
				<article className="article card">
					<div className="article-details">
						<span>Dodano</span>
						<span className="value"> {creationDate}</span>
						<span>przez</span>
						<span className="value">{login}</span>
					</div>
					<h4>{title}</h4>
					<p>{shortDescription}</p>
					<img src={previewPhoto} />
					{loading ? <Loading/> : (
						article && JSON.parse(article).map((articleSection)=><SingleArticleSection articleSection={articleSection} />)
					)}
				</article>
			</div>
		</FrontPageWrapper>
	);
};

ArticlePage.propTypes = {};

export default ArticlePage;
