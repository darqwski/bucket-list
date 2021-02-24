import React from 'react';

const ArticleItem = ({ item }) => {
	const { title,shortDescription, previewPhoto, previewCredits, articleId, cost, date, creationDate, login, comments, viewed } = item ;

	return (
		<a href={`article?id=${articleId}`}>
			<article className="card short-article">
				<div className="article-details">
					<span>Dodano</span>
					<span className="value"> {creationDate}</span>
					<span>przez</span>
					<span className="value">{login}</span>
				</div>
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
				<p className="article-details">
					<span>Wyświetlono</span>
					<span className="value"> {viewed}</span>
					<span>Komentarzy</span>
					<span className="value">{comments}</span>
				</p>
			</article>
		</a>
	);
};


ArticleItem.propTypes = {};

export default ArticleItem;
