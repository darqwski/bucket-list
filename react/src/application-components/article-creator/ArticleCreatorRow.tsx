import React from 'react';
import ArticleCreatorRowTitle from './ArticleCreatorRowTitle';
import ArticleCreatorRowContent from './ArticleCreatorRowContent';
import ArticleCreatorRowImage from './ArticleCreatorRowImage';
import { IArticleCreatorRow } from './types';

const ArticleCreatorRow: React.FC<IArticleCreatorRow> = ({ articleSection, updateFormSection, removeRow, moveUp, moveDown }) => {
	const isTitle = articleSection.type === 'title';
	const isContent = articleSection.type === 'content';
	const isImage = articleSection.type === 'image';
	const setType = (type: 'image'| 'content' | 'title') => {
		updateFormSection(articleSection.id, 'type', { target: { value: type } });
	};

	return (
		<div className="col s12 card article-row">
			<div className="row">
				<div className="col s12 manage-buttons">
					<button  onClick={()=>moveUp(articleSection.id)} className="btn light-blue">
						<span>Przesuń wyżej</span>
						<i className="material-icons">arrow_upward</i>
					</button>
					<button onClick={()=>moveDown(articleSection.id)} className="btn light-blue">
						<span>Przesuń wyżej</span>
						<i className="material-icons">arrow_downward</i>
					</button>
					<button onClick={()=>removeRow(articleSection.id)} className="btn light-blue">
						<span>Usuń sekcję</span>
						<i className="material-icons">delete</i>
					</button>
				</div>
				<div className="col s12">
					<div className="my-tabs">
						<p
							className={`my-tab ${ isImage ? 'my-tab-active':''}`}
							onClick={()=>setType('image')}>
						Obrazek
						</p>
						<p
							className={`my-tab ${ isContent ? 'my-tab-active':''}`}
							onClick={()=>setType('content')}>
						Treść
						</p>
						<p
							className={`my-tab ${ isTitle ? 'my-tab-active':''}`}
							onClick={()=>setType('title')}>
						Tytuł
						</p>
					</div>
				</div>
				<div className="col s12">
					{ articleSection.type === 'title' &&  (
						<ArticleCreatorRowTitle
							// @ts-ignore
							articleSection={articleSection}
							updateFormSection={updateFormSection}
						/>
					)}
					{ articleSection.type === 'content' &&  (
						<ArticleCreatorRowContent
							// @ts-ignore
							articleSection={articleSection}
							updateFormSection={updateFormSection}
						/>
					)}
					{ articleSection.type === 'image' &&  (
						<ArticleCreatorRowImage
							// @ts-ignore
							articleSection={articleSection}
							updateFormSection={updateFormSection}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ArticleCreatorRow;
