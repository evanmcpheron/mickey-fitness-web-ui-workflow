import React from 'react';
import { Form } from 'Components/Form';

export const AuthForm = ({
	validationSchema,
	initialValues,
	fields,
	title,
	includeReset,
	url,
	method,
	onSuccess,
}) => {
	return (
		<Form
			validationSchema={validationSchema}
			initialValues={initialValues}
			fields={fields}
			title={title}
			includeReset={includeReset}
			url={url}
			method={method}
			onSuccess={() => onSuccess()}
		/>
	);
};
