import React, { useState, useMemo, createContext } from 'react';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Styles/import.scss';
import { Box } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#f0f0f0',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#0f0f0f',
		},
	},
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const PaletteDisplay = () => {
	const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => {
					if (prevMode === 'light') {
						localStorage.setItem('mode', 'dark');
						return 'dark';
					}
					localStorage.setItem('mode', 'light');
					return 'light';
				});
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						width: '100%',
						minHeight: '100vh',
						bgcolor: 'background.default',
						color: 'text.primary',
					}}>
					<React.StrictMode>
						<App ColorModeContext={ColorModeContext} />
					</React.StrictMode>
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
