import axios from 'axios';

import BASE_URL from './makeBaseUrl';

const api = axios.create({ baseURL: `${BASE_URL}/contacts` });

const postContact = (body: any) => {
	const promise = api.post('', body);

	return promise;
};

const getContacts = () => {
	const promise = api.get('');

	return promise;
};

const updateContact = (contactId: string, body: any) => {
	const promise = api.put(`/${contactId}`, body);

	return promise;
};

const deleteContact = (contactId: string) => {
	const promise = api.delete(`/${contactId}`);

	return promise;
};

export {
	postContact,
	getContacts,
	updateContact,
	deleteContact,
};
