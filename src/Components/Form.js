import React from 'react';
import { Form as Wrapper, Formik } from 'formik';
import { InputField } from './FormikFields/InputField';
import { CheckboxField } from './FormikFields/CheckboxField';
import { Box, Button, Stack, Typography } from '@mui/material';

export const Form = ({
	fields,
	validationSchema,
	initialValues,
	title,
	submitButtonValue,
	includeReset,
	onSubmit,
}) => {
	const fieldTypeSelector = field => {
		const { label, name, type, fieldType, disabled } = field;

		switch (fieldType) {
			case 'checkbox':
				return <CheckboxField label={label} name={name} disabled={disabled} />;
			default:
				return <InputField label={label} name={name} type={type} />;
		}
	};

	return (
		<div className="Form">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={values => {
					onSubmit(values);
				}}>
				{formik => {
					return (
						<Box padding={2}>
							<Typography data-testid="form-title" variant={'h3'}>
								{title ? title : ''}
							</Typography>
							<Wrapper>
								{fields.map((field, index) => {
									return (
										<Box padding={1} key={index}>
											{fieldTypeSelector(field)}
										</Box>
									);
								})}
								<Stack direction={'row'} justifyContent="space-around">
									<Button
										variant="contained"
										color="success"
										type="submit"
										fullWidth
										data-testid="submit-button">
										{submitButtonValue ? submitButtonValue : 'Submit'}
									</Button>
									{includeReset ? (
										<Button
											variant="contained"
											color="error"
											type="reset"
											fullWidth
											data-testid="reset-button">
											Reset
										</Button>
									) : null}
								</Stack>
							</Wrapper>
						</Box>
					);
				}}
			</Formik>
		</div>
	);
};
