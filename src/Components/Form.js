import React, { useEffect, useRef, useState } from 'react';
import { Form as Wrapper, Formik } from 'formik';
import { InputField } from './FormikFields/InputField';
import { CheckboxField } from './FormikFields/CheckboxField';
import { Box, Button, Stack, Typography } from '@mui/material';
import useRequest from 'Hooks/use-request';

export const Form = ({
	fields,
	validationSchema,
	initialValues,
	title,
	submitButtonValue,
	includeReset,
	url,
	method,
	onSuccess,
}) => {
	const formRef = useRef();
	const { doRequest, info } = useRequest({
		url: url,
		method: method,
		body: { data: formRef },
		onSuccess: () => {
			return onSuccess();
		},
	});

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
		<div className="form">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async values => {
					await doRequest(values);
				}}
				innerRef={formRef}>
				{formik => {
					return (
						<Box padding={2}>
							{info}
							<Typography
								className="form-title"
								data-testid="form-title"
								variant={'h3'}>
								{title ? title : ''}
							</Typography>
							<Wrapper>
								{fields.map((field, index) => {
									return (
										<Box className={'form-item'} key={index}>
											{fieldTypeSelector(field)}
										</Box>
									);
								})}
								<Stack
									direction={'row'}
									spacing={2}
									justifyContent="space-around">
									<Button
										variant="contained"
										color="success"
										type="submit"
										fullWidth
										disabled={!formik.isValid}
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
