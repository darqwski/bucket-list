import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import FormDataManager, {useFormDataContext} from "../../../../context/FormDataManager";
import WithLabel from "../../../../components/forms/WithLabel";
import FormInput from "../../../../components/forms/FormInput";
import './add-article.less';
import appRequest from "../../../../utils/appRequest";

const AddArticlePage = () => {
    const { formData, setField } = useFormDataContext();

    useEffect(()=>{
        document.querySelector('.article-preview').innerHTML = formData.article
    }, [formData.article])

    const onSave = () => {
        appRequest({
            url: '/API/manage-articles/add-article/',
            method: 'POST',
            data: formData
        })
    };
    return (
        <div>
            <h3>Tworzenie nowego artykułu</h3>
            <div className="row">
                <div className="col s3" />
                <div className="form-section col s6">
                    <FormInput label="Tytuł artykułu" name="title"/>
                    <FormInput label="Krótki opis" name="shortDescription"/>
                    <FormInput label="Zdjęcie" name="previewPhoto"/>
                    <FormInput label="Opis do zdjęcia" name="previewCredits"/>
                </div>
                <div className="col s3" />
            </div>
            <div className="row">
                <div className="col s3"/>
                <div className="col s6">
                    <p> .section-title - Tytuł sekcji w artykule </p>
                    <p> .underline - Podkreślenie </p>
                    <p> .bolder - Pogrubienie </p>
                </div>
                <div className="col s3"/>
                <div className="col s6">
                    <textarea onChange={setField('article')} value={formData.article}/>
                </div>
                <div className="col s6 article-preview"/>
            </div>
            <div className="row">
                <div className="col s3" />
                <div className="form-section col s6">
                    <FormInput label="Cena" name="cost"/>
                    <FormInput label="Data" type="date" name="date"/>
                </div>
                <div className="col s3" />
            </div>
            <button className="btn-flat light-blue darken-2" onClick={onSave}>Zapisz artykuł</button>
        </div>
    )
}

AddArticlePage.propTypes = {}

export default () => (
    <FormDataManager>
        <AddArticlePage />
    </FormDataManager>
);
