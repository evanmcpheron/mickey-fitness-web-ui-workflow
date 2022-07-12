import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { get } from 'lodash';
import { InputNotification } from 'Components/InputNotification';

const useRequest = ({ url, method, onSuccess }) => {
	const [info, setInfo] = useState(null);

	const doRequest = async value => {
		try {
			setInfo(null);
			const res = await axios[method](url, value);

			const isSuccessful = get(res, 'data.error', '');

			const message = get(res, 'data.message', '');

			setInfo(
				<Box>
					{!isSuccessful ? onSuccess() : null}
					<InputNotification message={message} severity={'success'} />
				</Box>
			);
		} catch (err) {
			const message = get(err, 'response.data.message', 'Something went wrong');

			setInfo(<InputNotification message={message} severity={'error'} />);
		}
	};

	return { doRequest, info };
};

export default useRequest;
