import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Swatch from './Swatch';
import {selectSwatch} from './../Store/Actions';
import GridListTile from '@material-ui/core/GridListTile';
import toRenderProps from 'recompose/toRenderProps';
import withWidth from '@material-ui/core/withWidth';
const WithWidth = toRenderProps(withWidth());

class Details extends Component {

    clearSelection = () => {
        this.props.selectSwatch(null);
    }

    render() {
        const {
            swatches,
            selectSwatch,
            selected_swatch,
            selected_swatch: {
                root,
            } = {}
        } = this.props;

        return (
            <React.Fragment>
                <Grid item
                      md={12}
                      className="mainSwatch">
                    <Swatch swatch={selected_swatch}
                            selectSwatch={selectSwatch}
                            main="true"/>
                </Grid>
                <WithWidth>
                    {({width}) =>
                        <GridListStyled cols={(width === 'sm' || width === 'xs') ? 2 : 5}
                                        className="gridList">
                            {swatches[root] && swatches[root].map(color => (
                                <GridListTile key={`detailpage-${root}-${color}`}>
                                    <Swatch swatch={{root, color}}
                                            selectSwatch={selectSwatch}/>
                                </GridListTile>
                            ))}
                        </GridListStyled>}
                </WithWidth>

                <Grid container>
                    <Button onClick={this.clearSelection}>
                        <span>Clear</span>
                    </Button>
                </Grid>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        swatches: state.swatches.swatches,
        selected_swatch: state.swatches.selected_swatch
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSwatch: swatch => {
            dispatch(selectSwatch(swatch))
        },
    }
}

const GridListStyled = styled(GridList)`
    flex-wrap: nowrap !important;
`;

const GridListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
`;

const Button = styled.div`
    border: 1px solid #363C3C;
    border-radius: 10px; 
    height: 60px; 
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 260px; 
    margin: 2em auto;
    
    & > span {
        font-size: 18px;    
    }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Details);
