import React from "react";
import {ButtonContainer} from "./styled";

const Button = ({children, type, onclick, as, href, download}) => {
    return (
        <ButtonContainer type={type} onclick={onclick} as={as} href={href} download={download}>
            {children}
        </ButtonContainer>
    )
}

export default Button;

