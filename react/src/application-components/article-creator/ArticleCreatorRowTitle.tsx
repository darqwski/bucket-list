import React from 'react';
import { IArticleCreatorRowTitle } from './types';

const ArticleCreatorRowTitle: React.FC<IArticleCreatorRowTitle> = ({ articleSection, updateFormSection }) => {
	return (
		<div>
			<label> Miejsce na podtytuł </label>
			<input onChange={(e)=>updateFormSection(articleSection.id, 'title', e)} value={articleSection.title} />
		</div>
	);
};

export default ArticleCreatorRowTitle;
