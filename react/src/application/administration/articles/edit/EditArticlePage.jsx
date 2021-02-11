import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import FormDataManager, {useFormDataContext} from "../../../../context/FormDataManager";
import WithLabel from "../../../../components/forms/WithLabel";
import FormInput from "../../../../components/forms/FormInput";
import './edit-article.less';
import appRequest from "../../../../utils/appRequest";
import useAppRequest from "../../../../hooks/useAppRequest";
import Loading from "../../../../components/loading/Loading";
import {useSnackbar} from "../../../../context/SnackBarManager";


const articleId = (new URL(location.href)).searchParams.get('id');

const EditArticlePage = () => {
    const { formData, setField } = useFormDataContext();
    const { addSnackBar } = useSnackbar();
    useEffect(()=>{
        document.querySelector('.article-preview').innerHTML = formData.article
    }, [formData.article])

    const onSave = () => {
        appRequest({
            url: '/API/manage-articles/edit-article/',
            method: 'POST',
            data: formData
        }).then(({ data: { message } })=>{
            addSnackBar({ text: message})
        })
    };
    return (
        <div>
            <h3>Edycja artykułu</h3>
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

EditArticlePage.propTypes = {}

export default () => {
    const { data, loading } = useAppRequest({
        url: `/API/articles?id=${articleId}`
    });
    return loading ? <Loading/> : (
        <FormDataManager initialData={data}>
            <EditArticlePage />
        </FormDataManager>
    );
}
