import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import Home from './home';

import GlobalStyle from './styles/GlobalStyle';

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
			<GlobalStyle />
			
			<Home />
		</ThemeProvider>
	);
};

export default App;
