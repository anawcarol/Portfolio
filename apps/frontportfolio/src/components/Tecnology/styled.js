import styled from "styled-components";

export const CardTec = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    width: 300px;
    
    .icon {
        font-size: 50px;
        color: var(--color-primary);
    }

    .title {
        font-size: 20px;
        font-weight: bold;
        color: var(--color-primary);
    }

    .description {
        font-size: 15px;
        font-weight: 200;
        color: var(--color-primary);
        text-align: center;

    }
`