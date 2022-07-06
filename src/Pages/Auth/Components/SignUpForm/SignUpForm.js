import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthForm } from '../AuthForm';
import { validateSignUp } from './SignUpFormValidation';
import { initValueSignUp, fieldsSignUp } from './SignUpFormFuncs';

export const SignUpForm = () => {
	const onSuccess = () => {
		return <Navigate to="/" replace />;
	};

	return (
		<AuthForm
			validationSchema={validateSignUp}
			initialValues={initValueSignUp}
			fields={fieldsSignUp}
			title={'Sign Up'}
			includeReset={true}
			url={'/v1/user/signup'}
			method={'post'}
			onSuccess={() => onSuccess()}
		/>
	);
};
