import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormDataContext } from '../../context/FormDataManager';
import ArticleCreatorRow from "./ArticleCreatorRow";

const ArticleCreator = () => {
	const { formData, setField } = useFormDataContext();
	const [ articleSections, setArticleSections] = useState({ 1: { id: 1, type: 'title',  } });

	const updateFormSection = (articleId, inputName, { target: { value } }) => {
		setArticleSections(articleSections=>({
			...articleSections,
			[articleId]:{
				...articleSections[articleId], [inputName]: value
			} }));
	};
	const addFormSection = () => {
		const maxKey = Math.max(...Object.keys(articleSections)) + 1;
		setArticleSections(articleSections => ({ ...articleSections, [maxKey]: { id: maxKey, type: 'text' } }));
	};

	console.log(articleSections);
	return (
		<div className="row">
			{Object.entries(articleSections).map(([, articleSection], index)=> (
				<ArticleCreatorRow
					articleSection={articleSection}
					updateFormSection={updateFormSection}
					key={`article-row-${index}`}
				/>
			))}
			<button onClick={addFormSection}> Dodaj nowy element (Podtytuł/Treść/Zdjęcie)</button>
		</div>
	);
};


ArticleCreator.propTypes = {};

export default ArticleCreator;
