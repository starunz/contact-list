import React, { useState, useEffect } from 'react';

import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	Tooltip,
	Button,
	TextField,
	IconButton
} from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';
import Swal from 'sweetalert2';

import { AccountCircle, Add } from '@mui/icons-material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EditIcon from '@mui/icons-material/Edit';
import { Form } from './style';

import * as api from '../services/api';
import { handleValidation } from '../validations/handleValidation';
import { contactSchema } from '../schemas/contactSchema';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const EditContact = ({ makeReloadContacts, contact }: any) => {
	const [open, setOpen] = useState(false);
	const initialContactInfo = { 
		img: contact.img,
		name: contact.name,
		email: contact.email,
		phone: contact.phone,
	};
	const [contactData, setContactData] = useState({ ...initialContactInfo });

	useEffect(() => {
		setContactData({ ...initialContactInfo });
	}, [open]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function handleChange(e: any) {
		setContactData({ ...contactData, [e.target.name]: e.target.value });
	}

	const handleUpdateContact = async (e: any) => {
		e.preventDefault();

		setOpen(false);

		const body = {
			...contactData,
			phone: contactData.phone?.replace(/[^0-9.]+/g, ''),
		};

		const { isValid, error } = handleValidation(body, contactSchema);
		if (!isValid) return Swal.fire({
			icon: 'error',
			title: 'Oops...',
			html: error || 'Algo deu errado!'
		});
	
		try {
			const contactId = contact._id;

			await api.updateContact(contactId, { ...body });

			makeReloadContacts();
		}
		catch (error: any) {
			if(error.response.status === 409) {
				Swal.fire({
					icon: 'error',
					title: 'OOPS...',
					text: 'Já existe um usuário com esse número de telefone 🙁',
				});

				if(error.response.status === 422) {
					Swal.fire({
						icon: 'error',
						title: 'OOPS...',
						text: 'Erro ao preencher um dos campos 🙁',
					});
				}

				if(error.response.status === 500) {
					Swal.fire({
						icon: 'error',
						title: 'OOPS...',
						text: 'Erro com nosso servidor 🙁',
					});
				}
			}
		}
	};

	return (
		<>
			<Tooltip title="Editar">
				<IconButton aria-label="edit" size="small" sx={{ top: 'none' }}>
					<EditIcon fontSize="small" onClick={handleClickOpen} />
				</IconButton>
			</Tooltip>

			<Form onSubmit={handleUpdateContact}>

				<Dialog
					open={open}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
					aria-describedby="alert-dialog-slide-description"
					maxWidth='sm'
				>
					<DialogTitle>
						{'Preencha os campos'}
					</DialogTitle>

					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description" >
							<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1}}>
								<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
								<TextField 
									id="input-with-sx" 
									label="Nome" 
									variant="standard" 
									name='name'
									onChange={handleChange}
									value={contactData.name}
								/>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
								<EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
								<TextField 
									id="input-with-sx" 
									label="E-mail" 
									variant="standard" 
									name='email'
									onChange={handleChange}
									value={contactData.email}
								/>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
								<AddIcCallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
								<TextField 
									id="input-with-sx" 
									label="Telefone" 
									variant="standard" 
									name='phone'
									onChange={handleChange}
									value={contactData.phone}
								/>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
								<AddPhotoAlternateIcon sx={{ color: 'action.active', mr: 1, my: 0.5}} />
								<TextField 
									id="input-with-sx" 
									label="Imagem" 
									variant="standard" 
									name='img'
									onChange={handleChange}
									value={contactData.img}
								/>
							</Box>
						</DialogContentText>
					</DialogContent>

					<DialogActions>
						<Button onClick={handleClose}>Fechar</Button>
						<Button type='submit' onClick={handleUpdateContact}>Salvar</Button>
					</DialogActions>
				</Dialog>

			</Form>
		</>
	);
};

export default EditContact;
