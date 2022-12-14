import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from 'react-bootstrap';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'React Template - Vishnu';
root.render(
	<React.StrictMode>
		<Container>
			<App />
		</Container>
	</React.StrictMode>,
);
