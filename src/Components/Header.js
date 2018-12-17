import React, {Component} from 'react';
import logo from './../logo.png';
import styled from 'styled-components';

const Header = () => (
    <Container>
        <Logo src={{logo}}/>
        {/*<Input type="text" />*/}
    </Container>
)

const Container = styled.div`
    background-color: #363C3C;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
`;

const Input = styled.input`
    background-color: white; 
    border-radius: 10px; 
    border: none;
    border-radius: 10px;
    height: 40px;
    margin-right: 1em;
    width: 250px;
    font-size: 18px;
`;

const Logo = styled.img.attrs({
    srcSet: props => props.src.logo
})`
    margin-left: 1em;
    width: 180px; 
`;

export default Header;