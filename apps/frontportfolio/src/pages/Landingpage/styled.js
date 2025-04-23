import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EFEFEF;
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
            font-size: 80px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            margin-block: 10px;
            margin-top: -50px;
            font-family: var(--font-family);
            color: var(--color-secondary);
            z-index: 3;
        }

        img {
            width: 400px;
            z-index: 2;
            position: absolute;
            top: 0;
            margin-top: 150px;
            margin-left: 70px;


        }

        .lastName {
            font-size: 70px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
            color:  var(--color-primary);
            z-index: 1;
        }

        .line {
            width: 100px;
            height: 3px;
            margin-block: 10px;
            border-radius: 10px;
            background-color: var(--color-secondary);
        }

        .icon {
            display: flex;
            flex-direction: row;
            gap: 10px;
            color: var(--color-primary);
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
            color: var(--color-primary);
        }

        .software {
            font-size: 40px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
            color: var(--color-primary);

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
            color: var(--color-primary);
        }

        .button {
            display: flex;
            flex-direction: row;
            gap: 10px;
            padding-block: 50px;
            color: var(--color-primary);
            
        }



    }
`

export const SkillsSection = styled.section`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    margin-border: 0;
    background: #7C5593;
    padding-inline: 100px;
    padding-top: 80px;
    padding-bottom: 250px;
    z-index: 3;



    .title {
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        font-family: var(--font-family);
        color: #35183B;

    }

    .description {
        font-size: 20px;
        font-weight: 200;
        padding-top: 0px;
        font-family: var(--font-family);
        color: white;
    }


`


export const CardSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding: 100px;
    justify-content: center;
    margin-top: -150px;
    z-index: 3;

`

export const TecSection = styled.section`
    display : flex;
    flex-direction: row;
    margin-block: 40px;
    margin-inline: 100px;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


`



