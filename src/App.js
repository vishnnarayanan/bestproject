// import logo from './logo.svg';
import { Card } from 'react-bootstrap';
import './App.css';

function App() {
	return (
		<div className="App">
			<Card style={{ width: 'fit-content' }}>
				<Card.Body>
					<Card.Title>React Skeleton Template</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Vishnu Prasad
					</Card.Subtitle>
					<Card.Text>
						<li> ESLint - Airbnb: enforcing coding standards</li>
						<li> Prettier: enforcing coding standards</li>
						<li> Husky: commit restrictions</li>
						<li> Bootstrap and React Bootstrap</li>
					</Card.Text>
					<Card.Link
						target="_blank"
						href="mailto:vishnnarayanan@deloitte.com"
					>
						Mail me
					</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
}

export default App;
