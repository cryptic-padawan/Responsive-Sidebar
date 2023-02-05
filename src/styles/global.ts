import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }
`

export const SidebarMenu = styled.div`
    position: fixed;
    width: 60px;
    top:0;
    height: 100vh;
    z-index: 100;
    background-color: #202020;
    overflow:hidden;
    transition:width .3s ease;
    cursor:pointer;
    box-shadow:4px 7px 10px rgba(0,0,0,.4);
    
    &:hover {
        width:200px;
    }

    @media min-width: 600px {
        width: 80px;
    }
`

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    box-sizing: border-box;
    height: 90px;
    padding: 2rem 0 1.25rem;
`

export const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #000080;
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 0 1.5rem;
    }
`

