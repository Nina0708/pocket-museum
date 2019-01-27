import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import React from 'react';

import classNames from 'classnames';

const drawerWidth = 300;
const styles = (theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create([ 'margin', 'width' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create([ 'margin', 'width' ], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    hide: {
        display: 'none'
    }
});

const Nav = (props) => {
    const { classes, showPanel, openPanel } = props;
    return (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: showPanel
            })}
        >
            <Toolbar disableGutters={!showPanel}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={openPanel}
                    className={classNames(classes.menuButton, showPanel && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    POCKET MUSEUM
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Nav);
