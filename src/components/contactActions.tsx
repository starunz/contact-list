import { 
	IconButton, 
	Tooltip 
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ContactActions = () => {
	return(
		<>
			<Tooltip title="Editar">
				<IconButton aria-label="edit" size="small" sx={{ top: 'none' }}>
					<EditIcon fontSize="small" />
				</IconButton>
			</Tooltip>

			<Tooltip title="Deletar">
				<IconButton aria-label="delete" size="small">
					<DeleteIcon fontSize="small" />
				</IconButton>
			</Tooltip>
		</>
	);
};

export default ContactActions;
