import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(#62CF89, #00b140)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(98, 207, 137, .3)',
    color: 'white',
    height: 48,
    fontFamily: 'sans-serif',
  },
}));

export const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      className={styles.root}
      {...props}
    >
      {children}
    </Button>
  );
};
