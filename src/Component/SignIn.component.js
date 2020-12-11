import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import '../Style/SignIn.style.css';
import '../Style/Container.style.css';
import '../Style/Container.style.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.username = '';
        this.password = '';
        this.err = '';
        this.state = {
            open: false,
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const st = this.props;

    }

    render() {
        const st = this.props;


        if (st.isLogin === true){
            return (<Redirect to="/" />);
        }


        return (
            <div className="container">
                <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="error">
                        Username or Password is invalid!!
                    </Alert>
                </Snackbar>
                <div className="loginLayout">
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <Card className="paper">
                            <form className="form" noValidate>
                                <h1>SIGN IN</h1>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    onChange={(event) => {
                                        this.username = event.target.value;
                                    }}
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    onChange={(event) => {
                                        this.password = event.target.value;
                                    }}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    style={{
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                        color: 'white',
                                        backgroundColor: 'orangered'
                                    }}
                                    onClick={(event) => {
                                        event.preventDefault();

                                        st.signIn(this.username, this.password);
                                        if(st.err === 'err'){
                                            this.setState({ open: true});
                                        }
                                    }}
                                >
                                    Sign In
                                </Button>
                                <Grid className="footer-login" container>
                                    <Grid item>
                                        <Link href="/register" variant="body2">
                                            Don&apos;t have an account? Sign Up
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Container>
                </div>
            </div>
        );
    }
}