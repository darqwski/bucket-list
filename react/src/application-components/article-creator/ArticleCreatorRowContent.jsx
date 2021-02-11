import React from "react";
import PropTypes from 'prop-types';

const ArticleCreatorRowContent = ({ articleSection, updateFormSection }) => {
    return (
        <div>
            <label> Miejsce na podtytuł </label>
            <textarea onChange={(e)=>updateFormSection(articleSection.id, 'content', e)} value={articleSection.content} />
        </div>
    );
};

ArticleCreatorRowContent.propTypes = {}

export default ArticleCreatorRowContent;
