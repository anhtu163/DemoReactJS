import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import '../Style/NavMenu.style.scss';
import {Badge, Button} from "@material-ui/core";
import {NavMenuProps} from "../Container/NavMenu.container";

export default class NavMenu extends React.Component<NavMenuProps>{

    state : {
        anchorEl: any,
        open: boolean,
    }

    constructor(props: NavMenuProps) {
        super(props);

        this.state = {
            anchorEl: null,
            open : false,
        }

    }
    render() {

        const st = this.props;


        const handleMenu = (event: any) => {
            this.setState({anchorEl : event.currentTarget, open: true })
        };

        const handleClose = () => {
            this.setState({anchorEl: null, open: false })
        };

        const handleClickCart = () => {
            if(st.isLogin)
            {
                //return (<Redirect to="./cart" />);
                window.location.href = '/cart'
            }else{
                //return (<Redirect to="./signin" />);
                window.location.href='/signin'
            }

        };

        return (
            <div>
                <AppBar position="static" className="menu">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className="branch" onClick={() => window.location.href = '/'}>
                            Bách Hóa Tổng Hợp
                        </Typography>
                        {/*{auth && (*/}
                        <div className="search">
                            <div className="searchIcon">
                                <SearchIcon/>
                            </div>
                            <InputBase
                                className="inputRoot inputInput"
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        <div className="right-menu">

                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleClickCart}
                                color="inherit"
                            >
                                <Badge badgeContent={st.isLogin ? st.numberTotal: 0} max={20} color="primary">
                                    <ShoppingCart/>
                                </Badge>

                            </IconButton>

                            {st.isLogin ? (<div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={this.state.open}
                                    onClose={handleClose}
                                >
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>My account</MenuItem>
                                    <MenuItem onClick={()=> {st.signOut(); console.log(st.isLogin)}}>Sign out</MenuItem>
                                </Menu>
                            </div>): ( <div style={{display: 'flex', alignItems: 'center'}}>
                                <Button onClick={()=> {window.location.href='/signin'}} variant="contained" style={{color: 'white', backgroundColor: 'orangered', margin: 'auto'}}>Sign In</Button>
                            </div>)

                            }
                        </div>
                        {/*)}*/}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}