import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        display: "flex",
        maxWidth: 345,
        height: 100,
        padding: 0,
        marginTop: 10,
        backgroundColor: "#FFF4F4"
    },
});

export default function Coupon() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography component="h5">
                        Mã giảm 10%
                    </Typography>
                    <div className="line-divide"/>
                    <Typography variant="h7" component="h8">
                        Giảm tối đa 25.000 cho đơn hàng từ 100.000
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" style={{backgroundColor: "orangered", color: "white"}}>
                    Save
                </Button>
            </CardActions>
        </Card>
    );
}