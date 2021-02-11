import React from 'react';
import PropTypes from 'prop-types';

const ArticleCreatorRowTitle = ({ articleSection, updateFormSection }) => {
	return (
		<div>
			<label> Miejsce na podtytuł </label>
			<input onChange={(e)=>updateFormSection(articleSection.id, 'title', e)} value={articleSection.title} />
		</div>
	);
};

ArticleCreatorRowTitle.propTypes = {};

export default ArticleCreatorRowTitle;
