import React from 'react';

import {
	Avatar,
	Box,
	Container,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography
} from '@mui/material';

const arrayContact = [
	{
		img: 'uee',
		name: 'ue',
		email: 'ue@ue.com',
		phone: 99999999
	},
	{
		img: 'uee',
		name: 'ue',
		email: 'ue@ue.com',
		phone: 99999999
	},
	{
		img: 'uee',
		name: 'ue',
		email: 'ue@ue.com',
		phone: 99999999
	},
	{
		img: 'uee',
		name: 'ue',
		email: 'ue@ue.com',
		phone: 99999999
	},
	{
		img: 'uee',
		name: 'ue',
		email: 'ue@ue.com',
		phone: 99999999
	},
	{
		img: 'uee',
		name: 'ue',
		email: 'ue@ue.com',
		phone: 99999999
	},
	{
		img: 'uee',
		name: 'ue',
		email: 'ue@ue.com',
		phone: 99999999
	}
];

const Home = () => {
	return (
		<Container>

			<Typography
				component="h1"
				variant="h4"
				fontSize='3.5rem'
				fontFamily='Edu SA Beginner'
				align='center'
			>
				Contact List
			</Typography>

			{
				arrayContact.map((contact) => (
					<Box
						sx={{
							mt: 2,
							mb: 2,
							mx: 'auto',
							boxShadow: '0 4px 4px rgba(0,0,0,0.5)',
							maxWidth: 500,
						}}
					>

						<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
							<ListItem>

								<ListItemAvatar>
									<Avatar>
										{contact.img}
									</Avatar>
								</ListItemAvatar>

								<ListItemText
									primary={contact.name}
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'block' }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												{contact.email}
											</Typography>

											<Typography
												sx={{ display: 'block' }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												{contact.phone}
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
						</List>
					</Box>

				))
			}
		</Container>
	);
};

export default Home;
