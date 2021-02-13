import React from "react";
import './landing-page.less';
import useAppRequest from "../../hooks/useAppRequest";
import Loading from "../../components/loading/Loading";
import Footer from "../../application-components/footer/Footer";
import ArticleItem from "./ArticleItem";

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
            <section className="row">
                <div className="col s3" />
                <div className="flex-grow col s6">
                    {loading && <Loading/>}
                    {data?.map((item, index)=>(
                        <ArticleItem item={item} key={`ArticleItem-${index}`} />
                    ))}
                </div>
                <div className="col s3" />
            </section>
            <Footer/>
        </div>
    )
}

LandingPage.propTypes = {}

export default LandingPage;
