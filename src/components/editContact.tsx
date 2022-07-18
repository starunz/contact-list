import * as React from 'react';
import { useState } from 'react';

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
	Button,
	TextField,
	IconButton
} from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';

import { AccountCircle, Add } from '@mui/icons-material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EditIcon from '@mui/icons-material/Edit';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const EditContact = () => {

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Tooltip title="Editar">
				<IconButton aria-label="edit" size="small" sx={{ top: 'none' }}>
					<EditIcon fontSize="small" onClick={handleClickOpen} />
				</IconButton>
			</Tooltip>

			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				maxWidth='sm'
			>
				<DialogTitle>{'Preencha os campos'}</DialogTitle>

				<DialogContent >
					<DialogContentText id="alert-dialog-slide-description">
						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
							<TextField id="input-with-sx" label="Nome" variant="standard" />
						</Box>

						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
							<TextField id="input-with-sx" label="E-mail" variant="standard" />
						</Box>

						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<AddIcCallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
							<TextField id="input-with-sx" label="Telefone" variant="standard" />
						</Box>

						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<AddPhotoAlternateIcon sx={{ color: 'action.active', mr: 1, my: 0.5}} />
							<TextField id="input-with-sx" label="Imagem" variant="standard" />
						</Box>
					</DialogContentText>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose}>Fechar</Button>
					<Button onClick={handleClose}>Salvar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default EditContact;
