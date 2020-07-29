import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Padding from './Padding'

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
`

const Link = styled.a`
    margin-right: 15px;
    color: ${(props) => (props.active ? 'blue' : 'black')};
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};

    &:last-child {
        margin-right: 0;
    }
`

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: whitesmoke;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 14px;
    }
`

const Layout = ({ children, route }) => {
    return (
        <Padding>
            <Header>
                <Link active={route === '/'} href="/">
                    Главная
                </Link>
                <Link active={route === '/about'} href="/about">
                    О нас
                </Link>
            </Header>
            {children}
            <GlobalStyles />
        </Padding>
    )
}

export default Layout
