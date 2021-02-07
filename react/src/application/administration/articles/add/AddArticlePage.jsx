import React from "react";
import PropTypes from 'prop-types';
import {useFormDataContext} from "../../../../context/FormDataManager";

const AddArticlePage = () => {
    const {} = useFormDataContext();
    return (
        <div>AddArticlePage</div>
    )
}

AddArticlePage.propTypes = {}

export default AddArticlePage;
