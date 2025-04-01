import React from "react";
import { Nav, HeaderContainer } from "./styled";

function Header() {
    return (
        <HeaderContainer>
        <header>
         <Nav>
                <li>
                <a href="#about">Início</a>
                </li>
                <li>
                <a href="#projects">Sobre mim</a>
                </li>
                <li>
                <a href="#contact">Tecnologias</a>
                </li>
                <li>
                <a href="#contact">Projetos</a>
                </li>
                <li>
                <a href="#contact">Contatos</a>
                </li>
            </Nav>
        </header>
        </HeaderContainer>
    );
}

export default Header;