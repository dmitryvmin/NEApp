import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';
import {getRandom} from './../Store/Utils';
import {selectSwatch, filterByColor} from './../Store/Actions';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    selectRandom = () => {
        const {
            swatches,
            selectSwatch
        } = this.props;

        const swatch = getRandom(swatches);
        selectSwatch(swatch);
    }

    getColorList = () => {
        const {colors} = this.props;
        const list = _.clone(colors);
        list.unshift("All");
        return list;
    }

    filterByColor = color => e => {
        this.props.filterByColor(color);
    }

    render() {
        const {filter} = this.props;
        const colors = this.getColorList();

        return (
            <Container>
                <Button onClick={this.selectRandom}>
                    <span>Random Color</span>
                </Button>
                {colors && colors.map((c, i) =>
                    <Color key={`${c}-${i}`}
                           filter={(filter === c) ? "true" : "false"}
                           onClick={this.filterByColor(c)}>
                        {c}
                    </Color>)}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.swatches.colors,
        swatches: state.swatches.swatches,
        filter: state.swatches.filter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSwatch: swatch => {
            dispatch(selectSwatch(swatch))
        },
        filterByColor: swatch => {
            dispatch(filterByColor(swatch))
        },
    }
}

const Container = styled.div`
    background-color: #D6D8D8;
    height: 100%;
    padding: 1em;
`;

const Color = styled.div`
    font-weight: ${props => (props.filter === 'true') ? "800" : "300"};
    cursor: pointer;
    text-transform: capitalize;
    margin: 1em 0;
    font-size: 18px;
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
    
    & > span {
        margin: 0 1em;
        font-size: 18px;    
    }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);


