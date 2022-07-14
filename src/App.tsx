
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import Home from './home';

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#388e3c',
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
}

export default App;
