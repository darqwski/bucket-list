import React from 'react';
import PropTypes from 'prop-types';
import ArticleCreatorRowTitle from './ArticleCreatorRowTitle';
import ArticleCreatorRowContent from './ArticleCreatorRowContent';
import ArticleCreatorRowImage from './ArticleCreatorRowImage';

const ArticleCreatorRow = ({ articleSection, updateFormSection  }) => {
	console.log(articleSection);
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
							articleSection={articleSection}
							updateFormSection={updateFormSection}
						/>
					)}
					{ articleSection.type === 'content' &&  (
						<ArticleCreatorRowContent
							articleSection={articleSection}
							updateFormSection={updateFormSection}
						/>
					)}
					{ articleSection.type === 'image' &&  (
						<ArticleCreatorRowImage
							articleSection={articleSection}
							updateFormSection={updateFormSection}
						/>
					)}
				</div>
			</div>
		</div>
	);
};


ArticleCreatorRow.propTypes = {};

export default ArticleCreatorRow;
