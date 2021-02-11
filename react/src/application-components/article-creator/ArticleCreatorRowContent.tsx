import React from 'react';
import { IArticleCreatorRowContent } from './types';

const ArticleCreatorRowContent: React.FC<IArticleCreatorRowContent> = ({ articleSection, updateFormSection }) => {
	return (
		<div>
			<label> Miejsce na podtytuł </label>
			<textarea
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>updateFormSection(articleSection.id, 'content', e)}
				value={articleSection.content}
			/>
		</div>
	);
};

ArticleCreatorRowContent.propTypes = {};

export default ArticleCreatorRowContent;
