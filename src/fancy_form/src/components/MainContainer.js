import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '10px',
  },
}));

export const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container
      component={Paper}
      elevation={6}
      className={styles.root}
      maxWidth='xs'
      {...props}
    >
      {children}
    </Container>
  );
};
