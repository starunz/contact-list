import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { Box, Typography } from '@mui/material';

import SearchContact from './searchContact';
import CreateContact from './createContact';
import ContactItem from './contactItem';

import CircularProgress from '@mui/material/CircularProgress';

import * as api from '../services/api';

export interface Contact {
	img: string;
	name: string;
	email: string;
	phone: string;
}

const ContactList = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [value, setValue] = useState<Contact | null>(null);
	const [reloadObserver, setReloadObserver] = useState<object>({});
	const [haveContacts, setHaveContacts] = useState<boolean>(true);

	useEffect(() => {
		const promise = api.getContacts();

		promise.then(response => {
			const contacts = response.data;
			if (contacts.length === 0) setHaveContacts(false);
			setContacts(contacts);
		}).catch(error => {
			if(error.response.status === 409)
				Swal.fire({
					icon: 'error',
					title: 'OOPS...',
					text: 'Ocorreu um erro, por favor tente novamente!',
				});
		});

	}, [reloadObserver]);

	const makeReloadContacts = () => {
		setReloadObserver({});
		setValue(null);
		setHaveContacts(true);
	};

	if (!haveContacts) {
		return (
			<>
				<CreateContact
					contact={contacts}
					makeReloadContacts={makeReloadContacts}
				/>

				<SearchContact
					contacts={contacts}
					value={value}
					setValue={setValue}
				/>
			
				<Box sx={{ maxWidth: 600, mx: 'auto', mt: 18 }} >
					<Typography
						sx={{ wordWrap: 'break-word', fontSize: 18, fontFamily: 'Roboto' }}
						component="span"
						variant="subtitle1"
						color="text.primary"
					>
						Sem contatos ainda, experimente adicionar um novo!
					</Typography>
				</Box>
			</>
		);
	}

	return (
		<>
			<CreateContact
				contact={contacts}
				makeReloadContacts={makeReloadContacts}
			/>

			<SearchContact
				contacts={contacts}
				value={value}
				setValue={setValue}
			/>
					
			{
				contacts[0] || value ? 
					(value ? [value] : contacts).map((contact) => (
						<ContactItem 
							contact={contact}
							makeReloadContacts={makeReloadContacts}
						/>
					))
					:
					<Box 
						sx={{ 
							display: 'flex', 
							alignItems: 'center', 
							justifyContent: 'center',
							mt: 18
						}}
					>
						<CircularProgress />
					</Box>
			}
		</>
	);
};

export default ContactList;
