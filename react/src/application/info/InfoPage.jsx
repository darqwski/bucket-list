import React, { useEffect, useState } from 'react';
import FrontPageWrapper from '../../application-components/frontpage-wrapper/FrontpageWrapper';
import useAppRequest from '../../hooks/useAppRequest';
import Loading from '../../components/loading/Loading';
import * as Pages from './pages';

const infoPageName = (new URL(location.href)).searchParams.get('page');

const InfoPage = () => {
	const { data, loading } = useAppRequest({
		url: `/API/info/pages?pageId=${infoPageName}`
	});
	const [component, setComponent] = useState('');
	useEffect(()=>{
		console.log(data?.type, data?.content);
		if(!(data?.type)){
			return;
		}
		if( data.type === 'html'){
			document.querySelector('.info-container').innerHTML = data.content;
		}
		if( data.type === 'jsx') {
			setComponent(data.content);
		}
	}, [ data?.content, data?.type]);

	return (
		<FrontPageWrapper>
			{loading && <Loading/>}
			<div className="info-container article"/>
			{component ? Pages[component] : null}
		</FrontPageWrapper>
	);
};

InfoPage.propTypes = {};

export default InfoPage;
