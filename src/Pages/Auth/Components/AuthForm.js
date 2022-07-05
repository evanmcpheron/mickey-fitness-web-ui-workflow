import React from 'react';
import { Form } from 'Components/Form';

export const AuthForm = ({
	validationSchema,
	initialValues,
	fields,
	title,
	includeReset,
	onSubmit,
}) => {
	return (
		<Form
			validationSchema={validationSchema}
			initialValues={initialValues}
			fields={fields}
			title={title}
			includeReset={includeReset}
			onSubmit={values => onSubmit(values)}
		/>
	);
};
