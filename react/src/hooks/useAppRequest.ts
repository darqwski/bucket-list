import { useEffect, useState } from 'react';
import appRequest from '../utils/appRequest';
export interface IUseAppRequestProps {
	url: string,
	method?: 'POST' | 'GET' | 'PUT' | 'DELETE',
	data?: any,
	name?: string,
	deps?: any[]
}
export interface IUseAppRequestData {
	refresh(): void;
	loading: boolean;
	responseCode: number;
	data: any
}
export default ({ name = 'data', url, method, data, deps = [] }: IUseAppRequestProps): IUseAppRequestData => {
	const [responseData, setResponseData] = useState();
	const [loading, setLoading] = useState(true);
	const [isRefresh, setRefresh] = useState(false);
	const [responseCode, setResponseCode] = useState(0);

	useEffect(()=>{
		setLoading(true);
		appRequest({ url, method, data }).then(({ data, status })=>{
			setResponseData(data);
			setResponseCode(status);
			setLoading(false);
		});
	}, [isRefresh, ...deps]);

	const refresh = () => setRefresh(i=>!i);

	return {
		[name]: responseData,
		data: responseData,
		refresh,
		loading,
		responseCode
	};
};
