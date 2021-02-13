import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/loading/Loading';
import useAppRequest from '../../hooks/useAppRequest';
import './article-page.less';
import NavBar from '../../application-components/nav-bar/NavBar';
import Footer from "../../application-components/footer/Footer";

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
	)
}

const ArticlePage = () => {
	const articleId = (new URL(location.href)).searchParams.get('id');
	const { data, loading } = useAppRequest({
		url: `/API/articles?id=${articleId}`
	});
	const { article, title, shortDescription } = data || {};

	return (
		<div>
			<NavBar />
			<div className="row">
				<div className="col s3" />
				<article className="col s6 article card">
					<h4>{title}</h4>
					<p>{shortDescription}</p>
					{loading ? <Loading/> : (
						article && JSON.parse(article).map((articleSection)=><SingleArticleSection articleSection={articleSection} />)
					)}
				</article>
				<div className="col s3" />
			</div>
			<Footer/>
		</div>
	);
};

ArticlePage.propTypes = {};

export default ArticlePage;
