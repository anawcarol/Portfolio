import React from "react";
import {ButtonContainer} from "./styled";

const Button = ({children, type, onclick, as, href, download, variant='default'}) => {
    return (
        <ButtonContainer type={type} onclick={onclick} as={as} href={href} download={download} variant={variant}>
            {children}
        </ButtonContainer>
    )
}

export default Button;

