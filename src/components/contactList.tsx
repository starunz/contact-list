import React, { useEffect } from 'react';
import { useState } from 'react';

import { Box } from '@mui/material';

import SearchContact from './searchContact';
import CreateContact from './createContact';
import ContactItem from './contactItem';

import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';

import * as api from '../services/api';

export interface Contact {
	img: string;
	name: string;
	email: string;
	phone: string;
}

const ContactList = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [value, setValue] = React.useState<Contact | null>(null);

	useEffect(() => {
		const promise = api.getContacts();

		promise.then(response => {
			const contacts = response.data;
			setContacts(contacts);
		}).catch(error => {
			Swal.fire({
				icon: 'error',
				title: 'OOPS...',
				text: 'Ocorreu um erro, por favor tente novamente',
			});
		});

	}, []);

	return (
		<>
			<CreateContact />

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
