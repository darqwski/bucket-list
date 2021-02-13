import React from 'react';
import PropTypes from 'prop-types';

const ArticleItem = ({ item }) => {
	const { title,shortDescription, previewPhoto, previewCredits, articleId, cost, date } = item ;
	return (
		<a href={`article?id=${articleId}`}>
			<article className="short-article">
				<h3 className="title">{title}</h3>
				<img className="preview-photo" src={previewPhoto} />
				<p className="preview-credits">{previewCredits}</p>
				<p>{shortDescription}</p>
				<div className="flex">
					<div className="flex-grow details">
						<p className>Planowana data</p>
						<p className="date">{date}</p>
					</div>
					<div className="flex-grow details">
						<p>Planowany budżet</p>
						<p className="cost">{cost}</p>
					</div>
				</div>
			</article>
		</a>
	);
};


ArticleItem.propTypes = {};

export default ArticleItem;
