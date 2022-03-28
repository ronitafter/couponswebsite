import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { Widgets } from '@mui/icons-material';
import { Button, Form } from 'react-bootstrap';


import axios from 'axios';

class ContactUs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		}
	}

	handleSubmit(e: { preventDefault: () => void; }) {
		e.preventDefault();
		axios({
			method: "POST",
			url: "http://localhost:3002/send",
			data: this.state
		}).then((response) => {
			if (response.data.status === 'success') {
				alert("Message Sent.");
				this.resetForm()
			} else if (response.data.status === 'fail') {
				alert("Message failed to send.")
			}
		})
	}

	resetForm() {
		this.setState({ name: " ", email: " ", message: " " })
	}

	render() {
		return (
			<div className="ContactUs Box4 ">
				<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}

	onNameChange(event) {
		this.setState({ name: event.target.value })
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value })
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value })
	}
}

export default ContactUs;



// export default function RecipeReviewCard() {
// 	const [expanded, setExpanded] = React.useState(false);


// 	return (
// 		<Card className='Box3' sx={{ maxWidth: 345 }}>
// 			<CardHeader
// 				title="Contact Us"
// 			/>
// 			<CardContent>
// 				<Form>
// 					<Form.Group className="mb-3" controlId="formBasicEmail">
// 						<Form.Label>Email address</Form.Label>
// 						<Form.Control type="email" placeholder="Enter email" />
// 						<Form.Text className="text-muted">
// 							We'll never share your email with anyone else.
// 						</Form.Text>
// 					</Form.Group>

// 					<Form.Group className="mb-3" controlId="formBasicPassword">
// 						<Form.Label>what do you need?</Form.Label>
// 						<Form.Control type="test" placeholder="text" />
// 					</Form.Group>
// 					<Form.Group className="mb-3" controlId="formBasicCheckbox">
// 						<Form.Check type="checkbox" label="Check me out" />
// 					</Form.Group>
// 					<Button variant="primary" type="submit">
// 						Submit
// 					</Button>
// 				</Form>
// 			</CardContent>
// 			<CardActions disableSpacing>
// 			</CardActions>
// 			<Collapse in={expanded} timeout="auto" unmountOnExit>
// 			</Collapse>
// 		</Card>
// 	);
// }
