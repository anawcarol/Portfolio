import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ApresentationSection = styled.section`
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 100px;
    align-items: center;

    .name {
        display: flex;
        flex-direction: column;

        .firstName {
            font-size: 50px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            margin-block: 10px;
            font-family: var(--font-family);
        }

        .lastName {
            font-size: 40px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
        }

        .line {
            width: 100px;
            height: 3px;
            background-color: black;
            margin-block: 10px;
            border-radius: 10px;
        }

        .icon {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }
    }

    .apresentation {
        display: flex;
        flex-direction: column;

        .welcome {
            font-size: 20px;
            font-weight: 150;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
        }

        .software {
            font-size: 40px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
        }

        .description {
            font-size: 20px;
            font-weight: 200;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
        }

        .button {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }


    }
`



