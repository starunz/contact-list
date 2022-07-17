import { 
	Box, 
	Fab, 
	Tooltip, 
	Typography 
} from '@mui/material';

import { Add } from '@mui/icons-material';

const CreateContact = () => {
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

			<Fab 
				color="primary" 
				aria-label="add" 
				sx={{ width: 40, height: 40 }}
			>
				<Tooltip title="Criar">
					<Add />
				</Tooltip>
			</Fab>

		</Box>
	);
};

export default CreateContact;
