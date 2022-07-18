import React from 'react';

import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography 
} from '@mui/material';

import EditContact from './editContact';
import DeleteContact from './deleteContact';

const ContactItem = ({ contact }: any) => {
	return(
		<Box
			sx={{
				mt: 2,
				mx: 'auto',
				boxShadow: '0 4px 4px rgba(0,0,0,0.3)',
				'maxWidth': {
					maxWidth: 600,
					flexWrap: 'wrap',
					flexDirection: 'row',
					display: 'flex'
				},
				borderRadius: 4,
				'&:last-child': {
					mb: 6,
				},
				display: 'flex',
			}}
		>
			<List sx={{ width: '100%', bgcolor: 'background.paper' }}>

				<ListItem>
					<ListItemAvatar sx={{ minWidth: 65 }}>
						<Avatar 
							alt='contact-avatar' 
							src={contact?.img} 
							sx={{ width: 50, height: 50 }} 
						/>
					</ListItemAvatar>

					<ListItemText
						sx={{ wordWrap: 'break-word' }}

						primary={contact?.name}
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'block', wordWrap: 'break-word' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									{contact?.email}
								</Typography>

								<Typography
									sx={{ display: 'block' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									{contact?.phone}
								</Typography>
							</React.Fragment>
						}
					/>

					<EditContact />
					<DeleteContact />
				</ListItem>
			</List>
		</Box>
	);
};

export default ContactItem;
