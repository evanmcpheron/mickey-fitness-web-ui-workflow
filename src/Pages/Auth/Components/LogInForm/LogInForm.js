import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthForm } from '../AuthForm';
import { validateLogIn } from './LogInFormValidation';
import { initValueLogIn, fieldsLogIn } from './LogInFormFuncs';

export const LogInForm = () => {
	const onSuccess = () => {
		localStorage.setItem('authenticated', true);
		return <Navigate to="/" replace />;
	};

	return (
		<div>
			<AuthForm
				validationSchema={validateLogIn}
				initialValues={initValueLogIn}
				fields={fieldsLogIn}
				title={'Log In'}
				includeReset={true}
				url={'/v1/user/login'}
				method={'post'}
				onSuccess={() => onSuccess()}
			/>
		</div>
	);
};
