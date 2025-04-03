import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ApresentationSection = styled.section`
    width: 100%;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 100px;
    align-items: center;
    background-color: #EFEFEF;
    padding-top: 150px;
    padding-bottom: 100px;

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
            color: #35183B;
        }

        .lastName {
            font-size: 40px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
            color:  #7C5593;
        }

        .line {
            width: 100px;
            height: 3px;
            margin-block: 10px;
            border-radius: 10px;
            background-color: #7C5593;
        }

        .icon {
            display: flex;
            flex-direction: row;
            gap: 10px;
            color: #35183B;
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
            color: #35183B;
        }

        .software {
            font-size: 40px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
            color: #35183B;

            span {
                color: #7C5593;
            }
        }

        .description {
            font-size: 20px;
            font-weight: 200;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
            color: #35183B;
        }

        .button {
            display: flex;
            flex-direction: row;
            gap: 10px;
            padding-block: 50px;
            color: #35183B;
            
        }



    }
`

export const SkillsSection = styled.section`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;


    .aboutme {
        display: flex;
        flex-direction: column;
        background-color: #7C5593;

        .title {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
            font-family: var(--font-family);
            color: #EFEFEF;
        }

        .description {
            font-size: 20px;
            font-weight: 200;
            padding-top: 0px;
            font-family: var(--font-family);
            color: #EFEFEF;
        }

    }

`



