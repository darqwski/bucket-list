import React from 'react';
import PropTypes from 'prop-types';
import useAppRequest from '../../../hooks/useAppRequest';
import Loading from '../../../components/loading/Loading';
import { useSnackbar } from '../../../context/SnackBarManager';
import appRequest from '../../../utils/appRequest';

const ArticlesTable = () => {
	const { articleList, loading , refresh } = useAppRequest({
		url: '/API/manage-articles/article-list/',
		name: 'articleList'
	});
	const { addSnackBar } = useSnackbar();
	const onEnableArticle = articleId => () => {
		appRequest({
			url: '/API/manage-articles/enable/',
			method: 'POST',
			data: { articleId }
		}).then(({ data: { message } })=>{
			addSnackBar({ text: message });
			refresh();
		});
	};
	const onDisableArticle = articleId => () => {
		appRequest({
			url: '/API/manage-articles/disable/',
			method: 'POST',
			data: { articleId }
		}).then(({ data: { message } })=>{
			addSnackBar({ text: message });
			refresh();
		});
	};
	return loading ? <Loading/> : (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Tytuł</th>
					<th>Widoczny</th>
					<th colSpan="2">Akcje</th>
				</tr>
			</thead>
			<tbody>
				{
					articleList && articleList.map(({ articleId, title, confirmed }, index)=>(
						<tr key={`article-row-${index}`}>
							<td>{articleId}</td>
							<td>{title}</td>
							<td>{+confirmed ? 'Udostępniony' : 'Ukryty'}</td>
							<td>
								<a href={`edit/?id=${articleId}`}>Edytuj</a>
							</td>
							<td>
								<a onClick={+confirmed ? onDisableArticle(articleId) : onEnableArticle(articleId)}>{+confirmed ? 'Ukryj' : 'Udostępnij' }</a>
							</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
};

const ManageArticles = () => {
	return (
		<div>
			<a href="add"> Dodaj artykuł </a>
			<ArticlesTable />

		</div>
	);
};

ManageArticles.propTypes = {};

export default ManageArticles;
