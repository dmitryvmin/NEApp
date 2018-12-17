import React, {Component} from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';
import Swatches from './Swatches';
import Header from './Header';

class Home extends Component {

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm={3}>
                        <Sidebar />
                    </Grid>
                    <Grid className="mainContainer" item sm={9}>
                        <Swatches />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Home;
