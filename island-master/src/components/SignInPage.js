import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: '0',
    position: 'absolute',
    top: '45%',
    left:'40%',
    transform: 'translateY(-50%)',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {
  const classes = useStyles();
  handleSubmit = e  => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password
    }
    axios.post('http://localhost:5000/SignIn', data)
         .then(res => {
            console.log(res)
         })
         .catch(err => {
           console.log(err)
         })
  }

  return (
    <Container className={classes.main} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus
            onChange={e => this.email = e.target.value}
          />
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" 
            onChange={e => this.password = e.target.value}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> Sign In </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2"> Forgot password? </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2"> {"Don't have an account? Sign Up"} </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}