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
    width: 400,
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
  items: string[];
}

export const NotFoundCard = (props: CardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={props.name} />
      <CardContent style={{textAlign: 'left'}}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.details}
        </Typography>

        {props.items.map((item) => {
            return (
                <li>{item}</li>
            );
        })}
      </CardContent>
    </Card>
  );
}

export default NotFoundCard;
