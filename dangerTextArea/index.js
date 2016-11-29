import ReactDOM from 'react-dom';
import React from 'react';

// import DangerText from './templates/dangerText'

import App from './containers/box'

ReactDOM.render(
	<App time={ 3000 }></App>,
	document.getElementById('app')
)
