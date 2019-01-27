import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import React from 'react';

import classNames from 'classnames';

import fuzzysearch from 'fuzzysearch';

import { museums, wikiPedia, initialMuseumDetailData, ajaxErrorMuseumDetailData } from './Data';
import Detail from './Detail';
import Map from './Map';
import Nav from './Nav';
import Panel from './Panel';
import { _fetch } from './Util';

const drawerWidth = 300;

const styles = (theme) => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
});

class App extends React.Component {
    state = {
        showPanel: false,
        showMuseumDetail: false,
        chosenMuseum: null,
        museumDetailData: initialMuseumDetailData,
        filterText: '',
        filteredMuseums: museums
    };
    openDetail = async (index) => {
        this.setState({ chosenMuseum: museums[index] });
        this.setState({ showMuseumDetail: true });

        // Construct url parameters from params object
        const url = new URL(wikiPedia.baseUrl);
        const params = { action: 'opensearch', search: museums[index].name, limit: 2, format: 'json', origin: '*' };
        Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

        try {
            const data = await _fetch(fetch(url).then((r) => r.json()), 1000);
            this.setState({ museumDetailData: data });
        } catch (error) {
            // show error message when ajax call failed
            this.setState({ museumDetailData: ajaxErrorMuseumDetailData });
        }
    };

    closeDetail = () => {
        this.setState({ showMuseumDetail: false });
        this.setState({ museumDetailData: initialMuseumDetailData });
    };

    openPanel = () => {
        this.setState({ showPanel: true });
    };

    closePanel = () => {
        this.setState({ showPanel: false });
    };

    changeFilterText = (text) => {
        const formatedText = text.toLowerCase();
        this.setState({ filterText: text });
        if (formatedText.length) {
            const filteredMuseums = museums.filter((museum) => fuzzysearch(formatedText, museum.name.toLowerCase()));
            this.setState({ filteredMuseums });
        } else {
            this.setState({ filteredMuseums: museums });
        }
    };

    render() {
        const { classes } = this.props;
        const { showPanel, filterText, filteredMuseums, showMuseumDetail, chosenMuseum, museumDetailData } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Nav openPanel={this.openPanel} showPanel={showPanel} />
                <Panel
                    closePanel={this.closePanel}
                    showPanel={showPanel}
                    filterText={filterText}
                    changeFilterText={this.changeFilterText}
                    filteredMuseums={filteredMuseums}
                    openDetail={this.openDetail}
                />
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: showPanel
                    })}
                >
                    <Map filteredMuseums={filteredMuseums} openDetail={this.openDetail} />
                </main>
                <Detail
                    showMuseumDetail={showMuseumDetail}
                    museum={chosenMuseum}
                    closeDetail={this.closeDetail}
                    museumDetailData={museumDetailData}
                />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(App);
