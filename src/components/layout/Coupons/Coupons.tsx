import { Card } from "react-bootstrap";

import React from 'react'

function Coupons() {
	return (
		<div>

			<>
				<Card border="primary Box5" style={{ width: '18rem' }}>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<Card.Title>Primary Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
				<br />

				<Card border="secondary Box5" style={{ width: '18rem' }}>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<Card.Title>Secondary Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
				<br />

				<Card border="success Box5" style={{ width: '18rem' }}>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<Card.Title>Success Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
				<br />
			</>

		</div>
	)
}

export default Coupons



