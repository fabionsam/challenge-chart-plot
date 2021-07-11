import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Header = styled.div`
    display: flex;
    background-color: #dddee1;
    height: 60px;
    color: #2e3440;
    font-family: 'Source Sans Pro';
    font-size: 28px;
    align-items: center;
    font-weight: 600;
    padding-left: 30px;
`

const Footer = styled.div`
    left: 0;
    bottom: 0;
    background-color: #dddee1;
    height: 60px;
    padding-left: 30px;
`

const Button = styled.button`
    position: relative;
    background-color: #0180ff;
    border-radius: 2px;
    text-transform: uppercase;
    height: 30px;
    width: 110px;
    border: none;
    outline: none;
    color: white;
    font-family: 'Source Sans Pro';
    font-size: 10px;
    cursor: pointer;
    top: 15px;

    &:hover {
        background-color: #0162ff;
    }
`

export { MainContainer, Header, Footer, Button }
