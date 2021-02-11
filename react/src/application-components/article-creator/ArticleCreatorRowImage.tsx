import React from 'react';
import { IArticleCreatorRowImage } from './types';

const ArticleCreatorRowImage: React.FC<IArticleCreatorRowImage> = ({ articleSection, updateFormSection }) => {
	return (
		<div>
			<label> Miejsce na zdjęcie </label>
			<input onChange={(e)=>updateFormSection(articleSection.id, 'src', e)} value={articleSection.src} />
			{articleSection.src && (
				<img src={articleSection.src} alt="Link nie jest prawdiłowy" />
			)}
			<label> Miejsce na podpis do zdjęcia </label>
			<input onChange={(e)=>updateFormSection(articleSection.id, 'credits', e)} value={articleSection.credits} />
		</div>
	);
};

ArticleCreatorRowImage.propTypes = {};

export default ArticleCreatorRowImage;
