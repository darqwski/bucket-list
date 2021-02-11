import React from 'react';
import PropTypes from 'prop-types';

const ArticleCreatorRowImage = ({ articleSection, updateFormSection }) => {
	return (
		<div>
			<label> Miejsce na zdjęcie </label>
			<input onChange={(e)=>updateFormSection(articleSection.id, 'src', e)} />
			{articleSection.src && (
				<img src={articleSection.src} />
			)}
			<label> Miejsce na podpis do zdjęcia </label>
			<input onChange={(e)=>updateFormSection(articleSection.id, 'credits', e)} />
		</div>
	);
};

ArticleCreatorRowImage.propTypes = {};

export default ArticleCreatorRowImage;
