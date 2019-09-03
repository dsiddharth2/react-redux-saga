import React from 'react';
import './styles/index.css';

import { Container, Row, Col } from 'react-bootstrap';

import AddArticle from './components/addArticle/Add';
import DisplayArticle from './components/displayArticles/DisplayArticle';

function App() {
	return (
		<Container>
			<Row>
				<Col>
					<DisplayArticle />
				</Col>
				<Col>
					<AddArticle />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
