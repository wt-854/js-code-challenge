import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontSize: '40px',
    color: 'hsl(202, 57%, 15%)',
    fontWeight: 700,
    textShadow: '1px 1px gray',
  },
}));

export const Header = () => {
  const styles = useStyles();

  return (
    <Typography className={styles.root} component='h1'>
      Send Bitcoin
    </Typography>
  );
};
