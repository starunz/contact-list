import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

type allContacts = {
	contacts?: any
	value: any
	setValue: any
}

const SearchContact = ({ contacts, value, setValue }: allContacts) => {
	const defaultProps = {
		options: contacts,
		getOptionLabel: (contacts: any) => contacts.name,
	};

	return (
		<Stack 
			spacing={1} 
			sx={{ maxWidth: 600, mx: 'auto' }} 
		>

			<Autocomplete
				{...defaultProps}
				id="auto-complete"
				autoComplete
				includeInputInList
				renderInput={(contacts) => (
					<TextField 
						{...contacts} 
						label="Pesquisar" 
						variant="standard" 
					/>
				)}
				value={value}
				onChange={(event: any, newValue: allContacts | null) => {
					setValue(newValue);
				}}
			/>
		</Stack>
	);
};

export default SearchContact;
