import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import Home from './home';

const App = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#000000',
			},
			secondary: {
				main: '#1976d2',
			},
			background: { default: '#FAFAFA', paper: '#FAFAFA' },
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
};

export default App;
