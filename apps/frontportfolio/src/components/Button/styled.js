import styled, {css} from "styled-components";

const buttonVariants = {
    default: css`
        background-color: #7C5593;
        color: #EFEFEF;
        border: none;
    `,
    outline: css`
        background-color: transparent;
        color: #7C5593;
        border: 2px solid #7C5593;
    `,
};

export const ButtonContainer = styled.button`
    display: flex;
    font-size: 15px;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: var(--font-family);
    outline: none;


    ${({ variant }) => buttonVariants[variant]}

`
