import React from 'react';
import PropTypes from 'prop-types';
import useAppRequest from '../../../hooks/useAppRequest';
import Loading from '../../../components/loading/Loading';
import appRequest from "../../../utils/appRequest";
import {useSnackbar} from "../../../context/SnackBarManager";
import NavBar from "../../../application-components/admin-nav-bar/NavBar";

const InfoPagesTable = () => {
	const { infoPages, loading , refresh } = useAppRequest({
		url: '/API/manage-info-pages/info-page-list/',
		name: 'infoPages'
	});
	const { addSnackBar } = useSnackbar();

	const onEnableInfoPage = infoPageId => () => {
		appRequest({
			url: '/API/manage-info-pages/enable/',
			method: 'POST',
			data: { infoPageId }
		}).then(({ data: { message } })=>{
			addSnackBar({ text: message });
			refresh();
		});
	};
	const onDisableInfoPage = infoPageId => () => {
		appRequest({
			url: '/API/manage-info-pages/disable/',
			method: 'POST',
			data: { infoPageId }
		}).then(({ data: { message } })=>{
			addSnackBar({ text: message });
			refresh();
		});
	};

	return loading ? <Loading/> : (
		<table className="info-pages-table table card">
			<thead>
				<tr>
					<th>ID</th>
					<th>Tytuł</th>
					<th>Kolumna</th>
					<th colSpan="2">Akcje</th>
				</tr>
			</thead>
			<tbody>
				{
					infoPages && infoPages.map(({ title, infoPageId, footerColumns, confirmed }, index)=>(
						<tr key={`info-page-row-${index}`}>
							<td>{infoPageId}</td>
							<td>{title}</td>
							<td>{footerColumns}</td>
							<td>
								<a href={`edit/?pageId=${infoPageId}`}>Edytuj</a>
							</td>
							<td>
								<a className="link" onClick={+confirmed ?
									onDisableInfoPage(infoPageId) :
									onEnableInfoPage(infoPageId)}
								>{+confirmed ? 'Ukryj' : 'Udostępnij' }</a>
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
			<NavBar title="Zarządzanie stronami informacyjnymi" />
			<div className="manage-header">
				<a href="add" className="btn light-blue white-text">
					<span>Dodaj nową stronę informacyjną</span>
					<i className="material-icons">add</i>
				</a>
			</div>
			<InfoPagesTable />
		</div>
	);
};

ManageInfoPages.propTypes = {};

export default ManageInfoPages;
