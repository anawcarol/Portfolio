import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: black;
    position: fixed;    
    margin-top: 50px;    
`

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 100px;

    a {
        color: white;
        text-decoration: none;
        }
`

