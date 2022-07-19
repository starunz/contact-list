import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { 
	Box, 
	Dialog, 
	DialogActions, 
	DialogContent, 
	DialogContentText, 
	DialogTitle, 
	Fab, 
	Slide, 
	Tooltip, 
	Typography, 
	Button,
	TextField
} from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';

import { AccountCircle, Add } from '@mui/icons-material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Form } from './style';

import * as api from '../services/api';
import { contactSchema } from '../schemas/contactSchema';
import { handleValidation } from '../validations/handleValidation';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const CreateContact = ({ makeReloadContacts, contact }: any) => {
	const [open, setOpen] = useState(false);
	const [contactData, setContactData] = useState({ 
		img: contact.img,
		name: contact.name,
		email: contact.email,
		phone: contact.phone,
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function handleChange(e: any) {
		setContactData({ ...contactData, [e.target.name]: e.target.value });
	}

	const handleCreateContact = async (e: any) => {
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
			await api.postContact({ ...body });

			makeReloadContacts();
		}
		catch (error: any) {
			if(error.response.status === 409) {
				Swal.fire({
					icon: 'error',
					title: 'OOPS...',
					text: 'Já existe um usuário com esse número de telefone 🙁',
				});
			}

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
	};

	return (
		<Box 
			sx={{ 
				display: 'flex', 
				justifyContent: 'space-between', 
				alignItems: 'center', 
				maxWidth: 600,
				mx: 'auto' 
			}}
		>
			<Typography
				sx={{ wordWrap: 'break-word', fontSize: 22, letterSpacing: 2, fontFamily: 'Roboto' }}
				component="span"
				variant="subtitle1"
				color="text.primary"
			>
				Criar contato
			</Typography>

			<Form onSubmit={handleCreateContact}>
				<Fab 
					color="primary" 
					aria-label="add" 
					sx={{ width: 40, height: 40 }}
				>
					<Tooltip title="Criar">
						<Add onClick={handleClickOpen}/>
					</Tooltip>
				</Fab>

				<Dialog
					open={open}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
					aria-describedby="alert-dialog-slide-description"
					maxWidth='sm'
				>
					<DialogTitle>{'Preencha os campos'}</DialogTitle>

					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
								<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
								<TextField 
									id="input-with-sx"
									name='name'
									label="Nome" 
									variant="standard" 
									onChange={handleChange}
									value={contactData.name}
								/>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
								<EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
								<TextField 
									id="input-with-sx"
									name='email'
									label="E-mail" 
									variant="standard"
									onChange={handleChange}
									value={contactData.email}
								/>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
								<AddIcCallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
								<TextField 
									id="input-with-sx"
									name='phone'
									label="Telefone" 
									variant="standard" 
									onChange={handleChange}
									value={contactData.phone}
								/>
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
								<AddPhotoAlternateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
								<TextField 
									id="input-with-sx"
									name='img'
									label="Imagem" 
									variant="standard" 
									onChange={handleChange}
									value={contactData.img}
								/>
							</Box>
						</DialogContentText>
					</DialogContent>

					<DialogActions>
						<Button onClick={handleClose}>Fechar</Button>
						<Button type='submit' onClick={handleCreateContact}>Salvar</Button>
					</DialogActions>
				</Dialog>

			</Form>
		</Box>
	);
};

export default CreateContact;
