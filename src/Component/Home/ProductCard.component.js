import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 300,
        maxWidth: 300,
        margin: 20,
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

export default function ProductCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image="https://abv.edu.vn/wp-content/uploads/2017/05/chup-anh-san-pham-dep.jpg"
                title="Paella dish"
            />
            <CardHeader

                title="Chăm sóc da nhạy cảm"
                subheader="Giá tiền: 200.000 VND"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Button style={{ color: 'white',  backgroundColor: 'orangered'}}>Thêm vào giỏ hàng</Button>
                </div>

            </CardActions>
        </Card>
    );
}