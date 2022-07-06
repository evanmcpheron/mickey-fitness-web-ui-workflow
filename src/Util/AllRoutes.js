import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from 'Pages/Auth';

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path={'/auth'} element={<Auth />} />
		</Routes>
	);
};
