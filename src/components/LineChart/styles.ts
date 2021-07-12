import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 1px; //fix autogrow
    flex-grow: 1;
    font-family: Source Sans Pro;
    & span {
        font-size: 13px;
    }
`

export { Container }
