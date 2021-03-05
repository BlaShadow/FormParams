import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

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
