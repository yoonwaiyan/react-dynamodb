import React from 'react';
import { Spin } from 'antd';

const Loading = () => (
	<div style={{ textAlign: 'center' }}>
		<Spin
			size="large"
			spinning
			style={{
				position: 'absolute',
				top: '50%',
				transform: 'translate(-50%, -50%)'
			}}
		/>
	</div>
);

export default Loading;
