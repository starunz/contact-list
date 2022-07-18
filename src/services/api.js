import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

const postContact = (body) => {
	const promise = api.post('/contacts', body);

	return promise;
};

const getContacts = () => {
	const promise = api.get('/contacts');

	return promise;
};

const updateContact = (contactId, body) => {
	const promise = api.put(`/contacts/${contactId}`, body);

	return promise;
};

const deleteContact = (contactId) => {
	const promise = api.delete(`/contacts/${contactId}`);

	return promise;
};

export {
	postContact,
	getContacts,
	updateContact,
	deleteContact,
};
