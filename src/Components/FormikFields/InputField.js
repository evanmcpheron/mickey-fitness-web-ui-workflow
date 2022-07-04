import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Grid, TextField } from '@mui/material';

export const InputField = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<Grid item xs={12}>
			<TextField
				autoComplete="off"
				label={label}
				{...field}
				{...props}
				fullWidth={true}
				data-testid="text-field"
			/>
			<ErrorMessage name={field.name} />
		</Grid>
	);
};
