import React, { useEffect, useState } from 'react';
import ArticleCreatorRow from './ArticleCreatorRow';
import { IArticleCreator, IArticleSection } from './types';
import { useFormDataContext } from '../../context/form-data-manager/FormDataContext';
import './article-creator.less';

const ArticleCreator: React.FC<IArticleCreator> = ({ initialArticles }) => {
	const initialArticleSections = initialArticles ? (
		// @ts-ignore
		JSON.parse(initialArticles).reduce((memo, item)=>({ ...memo, [item.id]: item }), {})
	): { 1: { id: 1, type: 'title' } };
	const [ articleSections, setArticleSections] = useState<{[id: number]: IArticleSection}>(initialArticleSections);
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
	const removeRow = (articleSectionId: number) => {
		setArticleSections((sections) =>
			Object.entries(sections)
				.filter(([, item])=>item.id !== articleSectionId)
				.reduce((memo, [, item], index)=>({ ...memo, [index]:{ ...item, id: index } }), {})
		);
	};
	const moveUp = (articleSectionId: number) => {
		if(articleSectionId === Math.min(...Object.keys(articleSections).map(i=>+i))) {
			return;
		}
		const higherArticle = articleSections[articleSectionId-1];
		const lowerArticle = articleSections[articleSectionId];

		setArticleSections(sections => ({
			...sections,
			[articleSectionId-1]:lowerArticle,
			[articleSectionId]: higherArticle
		}));
	};
	const moveDown = (articleSectionId: number) => {
		if(articleSectionId === Math.max(...Object.keys(articleSections).map(i=>+i))) {
			return;
		}
		const higherArticle = articleSections[articleSectionId];
		const lowerArticle = articleSections[articleSectionId+1];

		setArticleSections(sections => ({
			...sections,
			[articleSectionId]:lowerArticle,
			[articleSectionId+1]: higherArticle
		}));
	};

	useEffect(()=>{
		setField('article')({ target: { value: JSON.stringify(Object.entries(articleSections).map(([,item])=>item)) } });
	}, [articleSections]);



	return (
		<div className="row">
			<div className="col s2" />
			<div className="col s8 article-creator">
				{Object.entries(articleSections).map(([, articleSection], index)=> (
					<ArticleCreatorRow
						moveDown={moveDown}
						moveUp={moveUp}
						removeRow={removeRow}
						articleSection={articleSection}
						updateFormSection={updateFormSection}
						key={`article-row-${index}`}
					/>
				))}
				<button
					className="btn btn-large light-blue"
					onClick={addFormSection}>
					Dodaj nowy element (Podtytuł/Treść/Zdjęcie)
				</button>
			</div>
			<div className="col s2" />
		</div>
	);
};

export default ArticleCreator;
