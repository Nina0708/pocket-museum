import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import IdealImage from 'react-ideal-image';

import React from 'react';

const styles = (theme) => ({
	media: {
		height: 140
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing.unit,
		top: theme.spacing.unit,
		color: theme.palette.grey[500]
	}
});

const Detail = (props) => {
	const { classes, showMuseumDetail, museum, closeDetail, museumDetailData } = props;
	return (
		<Dialog aria-labelledby="museum details" open={showMuseumDetail}>
			<DialogTitle>
				{museum ? museum.name : 'Select a museum first'}
			</DialogTitle>
			<DialogContent>
				{museum ? (
					<IdealImage
						placeholder={{ color: '#666' }}
						srcSet={[
							{ src: museum.image.small, width: 400 },
							{ src: museum.image.medium, width: 600 },
							{ src: museum.image.large, width: 800 }
						]}
						alt={museum.name}
						width={museum.image.width}
						height={museum.image.height}
						shouldAutoDownload={() => true}
					/>
				) : (
					''
				)}

				<Typography component="p">{museumDetailData[2].join(' ')}</Typography>
				<Typography component="p" variant="caption">
					Image and text information are provided by wikipedia.com
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeDetail}>Close</Button>
				<Button href={museumDetailData[3][0]}>Learn More</Button>
			</DialogActions>
		</Dialog>
	);
};

export default withStyles(styles)(Detail);
