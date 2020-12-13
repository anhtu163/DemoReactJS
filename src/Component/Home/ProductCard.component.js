import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import {red} from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles(() => ({
    root: {
        minWidth: 250,
        maxWidth: 250,
        margin: 10,
    },
    hover: {
        '&:hover': {
            border: "2px solid orangered",
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    name: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '250px',
    }
}));
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function ProductCard(props) {
    const classes = useStyles();
    const data = props.data;
    const addToCart = props.st.addToCart;
    const handleClick = (id) => {
        window.location.href = `/product-detail&id=${id}`;

    }
    console.log(localStorage.getItem('cartItems'))
    const [open, setOpen] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Add <strong>{data.name}</strong> into cart successfully!
                </Alert>
            </Snackbar>
            <Card className={classes.root} >
                <div className={classes.hover}>
                    <CardMedia
                        className={classes.media}
                        image={data.image}
                        title="Paella dish"
                    />
                    <div style={{margin: '15px'}}>
                        <div >
                            <h3 className={classes.name} style={{margin: '0'}} >{data.name}</h3>
                        </div>
                        <h2 style={{color: 'orangered', margin: '0'}}>{data.price} $</h2>
                    </div>
                    <CardActions disableSpacing>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                            <Button variant="contained" onClick={() => {
                                if(props.st.isLogin) {
                                    addToCart(data);
                                    setOpen(true);
                                }else{
                                    window.location.href='/signin';
                                }
                            }}
                                    style={{color: 'white', backgroundColor: 'orangered'}}>add to cart</Button>
                            <Button variant="contained" style={{marginLeft: "10px"}} onClick={()=> {handleClick(data.id)}}
                                    color="primary">details</Button>
                        </div>

                    </CardActions>
                </div>
            </Card>
        </div>
    );
}