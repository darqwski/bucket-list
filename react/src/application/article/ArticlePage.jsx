import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import Loading from "../../components/loading/Loading";
import useAppRequest from "../../hooks/useAppRequest";
import './article-page.less';
import NavBar from "../../application-components/nav-bar/NavBar";

const ArticlePage = () => {
    const articleId = (new URL(location.href)).searchParams.get('id');
    const { data, loading } = useAppRequest({
        url: `/API/articles?id=${articleId}`
    });
    const { article } = data || {};
    useEffect(()=>{
            if(!loading && article){
                document.querySelector('.article-container').innerHTML = article;
            }
    }, [loading]);

    return (
        <div>
            <NavBar />
            <div className="flex" style={{ display: 'flex '}}>
                <div className="rest-col">
                </div>
                <div className="flex-grow">
                    {loading ? <Loading/> : <div className="article-container" /> }
                </div>
                <div className="rest-col"></div>
            </div>
        </div>
    )
}

ArticlePage.propTypes = {}

export default ArticlePage;
