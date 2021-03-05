import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DoneIcon from '@material-ui/icons/Done';

import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export interface CardProps {
  name: string;
  details: string;
  dateStr: string;
  categoria: string;
  hora: string;
}

export const RecipeReviewCard = (props: CardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.name[0]}
          </Avatar>
        }
        title={props.name}
        subheader={props.dateStr}
      />
      <CardMedia
        className={classes.media}
        image="https://static.imoney.my/articles/wp-content/uploads/2019/07/stethoscope.jpg"
        title="Paella dish"
      />
      <CardContent style={{textAlign: 'left'}}>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>

        <Chip
          style={{marginRight: 5}}
          label={props.hora}
          onDelete={() => {}}
          deleteIcon={<DoneIcon />}
        />

        <Chip
          label={props.categoria}
          onDelete={() => {}}
          deleteIcon={<DoneIcon />}
        />
      </CardContent>
    </Card>
  );
}

export default RecipeReviewCard;
