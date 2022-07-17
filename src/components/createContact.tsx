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
	Typography, 
	Button,
	TextField
} from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';

import { AccountCircle, Add } from '@mui/icons-material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const CreateContact = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
				sx={{ wordWrap: 'break-word' }}
				component="span"
				variant="body2"
				color="text.primary"
			>
				Criar contato
			</Typography>

			<>
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
								<AddPhotoAlternateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
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

		</Box>
	);
};

export default CreateContact;
