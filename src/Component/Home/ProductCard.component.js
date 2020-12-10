import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import {red} from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() => ({
    root: {
        minWidth: 300,
        maxWidth: 300,
        margin: 20,
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
}));

export default function ProductCard(props) {
    const classes = useStyles();
    const data = props.data;
    const addToCart = props.st.addToCart;
    const handleClick = (id) => {
        window.location.href = `/product-detail&id=${id}`;
    }
    console.log(localStorage.getItem('cartItems'))
    return (
        <div>
            <Card className={classes.root} onClick={() => handleClick(data.id)}>
                <div className={classes.hover}>
                    <CardMedia
                        className={classes.media}
                        image={data.image}
                        title="Paella dish"
                    />
                    <div style={{margin: '15px'}}>
                        <h3 style={{margin: '0'}}>{data.name}</h3>
                        <h2 style={{color: 'orangered', margin: '0'}}>{data.price} VND</h2>
                    </div>
                    <CardActions disableSpacing>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                            <Button variant="contained" onClick={() => addToCart(data)}
                                    style={{color: 'white', backgroundColor: 'orangered'}}>add to cart</Button>
                            <Button variant="contained" style={{marginLeft: "10px"}}
                                    color="primary">buy now</Button>
                        </div>

                    </CardActions>
                </div>
            </Card>
        </div>
    );
}