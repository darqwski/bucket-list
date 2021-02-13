import React from 'react';
import PropTypes from 'prop-types';
import useAppRequest from '../../../hooks/useAppRequest';
import Loading from '../../../components/loading/Loading';

const InfoPagesTable = () => {
	const { infoPages, loading , refresh } = useAppRequest({
		url: '/API/manage-info-pages/info-page-list/',
		name: 'infoPages'
	});

	return loading ? <Loading/> : (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Tytuł</th>
					<th>Kolumna</th>
					<th colSpan="1">Akcje</th>
				</tr>
			</thead>
			<tbody>
				{
					infoPages && infoPages.map(({ title, infoPageId, footerColumns }, index)=>(
						<tr key={`info-page-row-${index}`}>
							<td>{infoPageId}</td>
							<td>{title}</td>
							<td>{footerColumns}</td>
							<td>
								<a href={`edit/?pageId=${infoPageId}`}>Edytuj</a>
							</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
};

const ManageInfoPages = () => {

	return (
		<div>
			<a href="add">Dodaj nową stronę informacyjną</a>
			<InfoPagesTable />
		</div>
	);
};

ManageInfoPages.propTypes = {};

export default ManageInfoPages;
