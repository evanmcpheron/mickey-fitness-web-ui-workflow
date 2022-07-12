import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import { LoginContainer } from 'Pages/Auth/LoginContainer';
import { SignupContainer } from 'Pages/Auth/SignupContainer';

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'/login'} element={<LoginContainer />} />
			<Route path={'/signup'} element={<SignupContainer />} />
		</Routes>
	);
};
