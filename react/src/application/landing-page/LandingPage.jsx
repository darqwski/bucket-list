import React from "react";
import './landing-page.less';
import useAppRequest from "../../hooks/useAppRequest";
import Loading from "../../components/loading/Loading";
import Footer from "../../application-components/footer/Footer";
import ArticleItem from "./ArticleItem";
import FrontPageWrapper from "../../application-components/frontpage-wrapper/FrontpageWrapper";

const LandingPage = () => {

    const { data, loading } = useAppRequest({
        url: '/API/articles?newest'
    });

    return (
        <div>
            <FrontPageWrapper>
                <section className="row">
                    <div className="flex-grow col s12">
                        {loading && <Loading/>}
                        {data?.map((item, index)=>(
                            <ArticleItem item={item} key={`ArticleItem-${index}`} />
                        ))}
                    </div>
                </section>
            </FrontPageWrapper>
        </div>
    )
}

LandingPage.propTypes = {}

export default LandingPage;
