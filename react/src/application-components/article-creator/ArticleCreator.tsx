import React, { useEffect, useState } from 'react';
import ArticleCreatorRow from './ArticleCreatorRow';
import { IArticleCreator, IArticleSection } from './types';
// @ts-ignore
import { useFormDataContext } from '../../context/FormDataManager';
const ArticleCreator: React.FC<IArticleCreator> = () => {
	const [ articleSections, setArticleSections] = useState<{[id: number]: IArticleSection}>({ 1: { id: 1, type: 'title'  } });
	const { setField } = useFormDataContext();
	const updateFormSection = (articleId: number, inputName: string, { target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		setArticleSections(articleSections=>({
			...articleSections,
			[articleId]:{
				...articleSections[articleId], [inputName]: value
			} }));
	};
	const addFormSection = () => {
		const maxKey = Math.max(...Object.keys(articleSections).map(i=>+i)) + 1;
		setArticleSections(articleSections => ({ ...articleSections, [maxKey]: { id: maxKey, type: 'title' } }));
	};
	useEffect(()=>{
		setField('article')({ target: { value: JSON.stringify(Object.entries(articleSections).map(([,item])=>item)) } });
	}, [articleSections]);



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

export default ArticleCreator;
