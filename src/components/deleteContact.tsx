import * as React from 'react';

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

const DeleteContact = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
				<DialogTitle id="alert-dialog-title">
					{'Deletar'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Tem certeza que deseja deletar esse contato?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Fechar</Button>
					<Button onClick={handleClose} autoFocus>Deletar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DeleteContact;
