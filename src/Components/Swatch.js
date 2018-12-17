import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import {selectSwatch} from './../Store/Actions';

class Swatch extends Component {

    selectSwatch = () => {
        const {swatch} = this.props;
        this.props.selectSwatch(swatch);
    }

    render() {

        const {
            swatch: {
                color
            } = {},
            main
        } = this.props;

        return (
            <StyledCard main={main}>
                <StyledCardContent color={color}
                                   main={main}>
                </StyledCardContent>
                <StyledCardActions main={main}
                                   onClick={this.selectSwatch}>
                    <span>{color}</span>
                </StyledCardActions>
            </StyledCard>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectSwatch: swatch => {
            dispatch(selectSwatch(swatch))
        },
    }
}

const StyledCardActions = styled(CardActions)`
    padding: 1em !important;
    font-size: ${props => (props.main ? '26px' : '18px')};
    & > span {
        margin: 0.5em;
    }
`;

const StyledCard = styled(Card)`
    margin: 1em; 
    // ${({main}) => main && `
    //     flex-grow: 1;
    // `}
`;

const StyledCardContent = styled(CardContent)`
    background-color: ${props => props.color};
    height: ${props => (props.main ? '300px' : '100px')};
`;

export default connect(null, mapDispatchToProps)(Swatch);
