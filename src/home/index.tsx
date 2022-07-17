import {
	Container,
	Typography
} from '@mui/material';

import ContactList from '../components/contactList';

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

			<ContactList />
		</Container>
	);
};

export default Home;
