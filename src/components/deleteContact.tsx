import * as React from 'react';
import Swal from 'sweetalert2';

import { 
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton, 
	Tooltip 
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import * as api from '../services/api';

const DeleteContact = ({ makeReloadContacts, contact }: any) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDeleteContact = async () => {
		setOpen(false);

		try {
			const contactId = contact._id;

			await api.deleteContact(contactId);

			makeReloadContacts();
		}
		catch (error: any) {
			if(error.response.status === 409) {
				Swal.fire({
					icon: 'error',
					title: 'OOPS...',
					text: 'Contato já deletado 🙁',
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
		<>
			<Tooltip title="Deletar">
				<IconButton aria-label="delete" size="small">
					<DeleteIcon fontSize="small" onClick={handleClickOpen} />
				</IconButton>
			</Tooltip>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Deletar'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Tem certeza que deseja deletar esse contato?
					</DialogContentText>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose}>Fechar</Button>
					<Button onClick={handleDeleteContact} autoFocus>Deletar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DeleteContact;
