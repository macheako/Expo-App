import { fetch } from 'expo/fetch';

export type HttpRequest = {
	status?: number;
	response?: object|null;
	error?: any|null;
};

export const Http = {
	Request: async function(url: string, method: string ='GET', data: object|null = null, returnResponse: boolean=true): Promise<HttpRequest> {
		try
		{
			console.log("HTTP Request!\n"
				+ `    - url:    ${url}` 	+ "\n"
				+ `    - method: ${method}` + "\n"
				+ `    - data:   ${data}` 	+ "\n");

			// Make Request
			//
			//////////////////////////////////
			const response = await fetch(url, 
			{
				method: method,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: data ? JSON.stringify(data) : null
			});

			// Parse Response (if needed)
			//
			//////////////////////////////////
			const responseBody = response.ok && returnResponse
									? await response.json()
									: {};

			if (response.ok && returnResponse)
				console.log('HTTP Response: ', responseBody);

			// Return Response
			//
			//////////////////////////////////
        	return { 
				status: response.status,
				response: responseBody,
			};
		} 
		catch(err) 
		{
			console.error('Http.Request ERROR: ', err);
			return { status: undefined, error: err };
		}
	},

	Get: async function(url: string, returnResponse: boolean=true) {
		return await this.Request(url, 'GET', null, returnResponse);
	},

	Post: async function(url: string, data: {}, returnResponse: boolean=true) {
		return await this.Request(url, 'POST', data, returnResponse);
	},
};

export default Http;