import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Swatch from './Swatch';
import Details from './Details';
import {selectSwatch, goToPage} from './../Store/Actions';
import {getFlatMap, batchSwatches, shuffle} from './../Store/Utils';

class Swatches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 0,
            selectedColor: null,
        }
    }

    getPages = (swatchesPerPage) => {
        const {
            swatches,
            filter
        } = this.props;

        const selectedSwatches = (!filter || filter === 'All')
            ? swatches
            : {[filter]: swatches[filter]};

        const swatchMap = getFlatMap(selectedSwatches);
        shuffle(swatchMap);
        const pages = batchSwatches(swatchMap, 12);

        return pages;
    }

    goTo = activePage => e => {
        this.props.goToPage(activePage);
    }

    selectColor = color => e => {
        this.setState({selectedColor: color});
    }

    render() {
        const {
            swatches,
            selected_swatch,
            active_page
        } = this.props;

        const pages = this.getPages(12);

        return (
            <Grid container>
                {selected_swatch
                    ?
                    <Details selectedColor={selected_swatch}
                             selectColor={this.selectColor}
                             clearSelection={this.clearSelection}/>
                    :
                    <React.Fragment>
                        {pages[active_page].map(s =>
                            <Grid key={`${s.root}-${s.color}`}
                                  item
                                  sm={3}>
                                <Swatch swatch={s}
                                        selectColor={this.selectColor}/>
                            </Grid>
                        )}
                        <Pagination>{pages && pages.map((p, i) =>
                            <Page key={`page-${i}`}
                                  active={(active_page === i) ? true : false}
                                  onClick={this.goTo(i)}>{i + 1}</Page>
                        )}</Pagination>
                    </React.Fragment>
                }
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectSwatch: swatch => {
            dispatch(selectSwatch(swatch))
        },
        goToPage: page => {
            dispatch(goToPage(page))
        },
    }
}

const mapStateToProps = (state) => {
    return {
        swatches: state.swatches.swatches,
        selected_swatch: state.swatches.selected_swatch,
        active_page: state.swatches.active_page,
        filter: state.swatches.filter,
    };
};

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5em 0;
    width: 100%;
`;

const Page = styled.span`
    text-decoration: ${props => props.active ? "underline" : "default"};
    margin: 1em;
    font-size: 18px; 
    cursor: pointer;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Swatches);
