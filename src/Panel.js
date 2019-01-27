import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import React from 'react';

const drawerWidth = 300;

const styles = (theme) => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 260,
        height: 56
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    }
});

const Panel = (props) => {
    const { showPanel, classes, closePanel, changeFilterText, filterText, filteredMuseums, openDetail } = props;
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={showPanel}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={closePanel}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <TextField
                id="standard-name"
                label="Search"
                margin="normal"
                variant="outlined"
                value={filterText}
                className={classes.textField}
                onChange={(e) => changeFilterText(e.target.value)}
            />
            <Divider />
            <List>
                {filteredMuseums.map((museum, index) => (
                    <ListItem button key={index} onClick={(_) => openDetail(index)}>
                        <ListItemText primary={museum.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default withStyles(styles)(Panel);
