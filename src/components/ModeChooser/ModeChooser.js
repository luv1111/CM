import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Logo from './Logo.png';
import './ModeChooser.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '16px 0px',
        minHeight: '50vh',
        height: '100%',
        justifyContent: 'middle'
    },
    paper: {
        padding: theme.spacing(1),
        borderRadius: 10

    },
    button: {
        margin: '20px 0'
    }
}));

export default (props) => {
    const classes = useStyles();

    return ( <
        React.Fragment >
        <
        div className = 'grid' >
        <
        div className = 'title' >
        <
        img className = 'logoimg'
        src = { Logo }
        alt = 'logo' / >
        <
        /div> <
        div className = { classes.root } >
        <
        Grid className = 'grid'
        container spacing = { 2 } >
        <
        Grid item xs = { 12 }
        md = { 6 } >
        <
        Link to = '/lite'
        style = {
            { textDecoration: 'none' }
        } >
        <
        Card raised elvation = { 6 }
        className = { classes.paper } >
        <
        Typography variant = 'h5'
        gutterBottom >
        Lite Mode <
        /Typography> <
        Typography variant = 'body1'
        color = 'textSecondary' >
        <
        ul style = {
            { listStyle: 'none' }
        } >
        <
        li > Use lightweight model(downlaod size 10 MB) < /li> <
        li > Slightly less detailed output compared to pro mode < /li> <
        li > Faster output generation time < /li> <
        li > Much less intensive compute heavy < /li> < /
        ul > <
        /Typography> <
        Button className = { classes.button }
        variant = "outlined"
        color = "primary" >
        Go To Lite Mode <
        /Button> < /
        Card > <
        /Link> < /
        Grid >

        <
        /Grid> < /
        div >

        <
        /div> < /
        React.Fragment >
    )
}