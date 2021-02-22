// @ts-ignore
import { ROUTER_APP_PREFIX } from '../config/app-config';

const appRequest = ({
	url = '/',
	data= undefined,
	method = 'GET',
	headers = {},
	...rest
}: {
	url: string,
	data: any,
	method?: 'POST' | 'GET' | 'PUT' | 'DELETE',
	headers?: {
		[key: string]: string
	}
}): Promise<{ data: any, status: number }> => fetch(ROUTER_APP_PREFIX+url, {
	...rest,
	body: data && JSON.stringify(data),
	method: method,
	headers: {
		...(headers || {}),
	}
}).then( response => response.json().then(data => ({ data, status: response.status })));

export default appRequest;
