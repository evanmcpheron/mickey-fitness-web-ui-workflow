import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';

export const CheckboxField = props => {
	const { label, disabled, name, required } = props;
	const [field, meta] = useField(props);

	return (
		<div>
			<FormControlLabel
				control={
					<Checkbox
						disabled={disabled}
						required={required}
						name={name}
						{...field}
						{...props}
					/>
				}
				label={label}
			/>
			<ErrorMessage
				component="div"
				className="error-message"
				name={field.name}
			/>
		</div>
	);
};
