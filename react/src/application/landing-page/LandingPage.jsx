import React from "react";
import PropTypes from 'prop-types';
import './landing-page.less';
import useAppRequest from "../../hooks/useAppRequest";
import Loading from "../../components/loading/Loading";
import Footer from "../../application-components/footer/Footer";

const ArticleItem = ({ item }) => {
     const { title,shortDescription, previewPhoto, previewCredits, articleId, cost, date } = item ;
    return (
        <a href={`article?id=${articleId}`}>
            <div className="short-article">
                <h3 className="title">{title}</h3>
                <img className="preview-photo" src={previewPhoto} />
                <p className="preview-credits">{previewCredits}</p>
                <p>{shortDescription}</p>
                <div className="flex">
                    <div className="flex-grow details">
                        <p className>Planowana data</p>
                        <p className="date">{date}</p>
                    </div>
                    <div className="flex-grow details">
                        <p>Planowany budżet</p>
                        <p className="cost">{cost}</p>
                    </div>
                </div>
            </div>
        </a>
    )
};

const LandingPage = () => {

    const { data, loading } = useAppRequest({
        url: '/API/articles?newest'
    });

    return (
        <div>
            <div className="nav-bar">
                <h1> My bucket list</h1>
                <h2>Rzeczy do zrobienia w ciągu życia</h2>
                <div className="nav-border"/>
            </div>
            <section className="flex" style={{ display: 'flex '}}>
                <div className="rest-col">
                </div>
                <article className="flex-grow main-col">
                    {loading && <Loading/>}
                    {data?.map((item, index)=>(
                        <ArticleItem item={item} key={`ArticleItem-${index}`} />
                    ))}
                </article>
                <div className="rest-col">
                    <a>Link 1</a>
                    <a>Link 2</a>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

LandingPage.propTypes = {}

export default LandingPage;
