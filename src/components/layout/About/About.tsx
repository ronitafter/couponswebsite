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




export default function RecipeReviewCard() {
	const [expanded, setExpanded] = React.useState(false);


	return (
		<Card className='Box3' sx={{ maxWidth: 345 }}>
			<CardHeader
				title="About"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Coupon Home offers you the best codes and deals for your favorite online retailers—all in one place. We’ve analyzed thousands of discounts to ensure our users have easy access to all the best deals.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
			</Collapse>
		</Card>
	);
}
