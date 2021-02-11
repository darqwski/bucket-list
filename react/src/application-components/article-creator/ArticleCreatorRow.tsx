import React from 'react';
import ArticleCreatorRowTitle from './ArticleCreatorRowTitle';
import ArticleCreatorRowContent from './ArticleCreatorRowContent';
import ArticleCreatorRowImage from './ArticleCreatorRowImage';
import { IArticleCreatorRow } from './types';

const ArticleCreatorRow: React.FC<IArticleCreatorRow> = ({ articleSection, updateFormSection  }) => {
	return (
		<div className="col s12">
			<div className="row">
				<div className="col s12">
					<button onClick={()=>updateFormSection(articleSection.id, 'type', { target: { value:'image' } })}> Obrazek </button>
					<button onClick={()=>updateFormSection(articleSection.id, 'type', { target: { value:'content' } })}> Treść </button>
					<button onClick={()=>updateFormSection(articleSection.id, 'type', { target: { value:'title' } })}> Tytuł </button>
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
