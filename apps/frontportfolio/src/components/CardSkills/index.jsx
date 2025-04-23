import React from "react";
import {CardContainer} from "./styled";

function CardSkills({children, icon}) {
    return (
        <CardContainer>
            {icon}
            <span>{children}</span>
            
            
        </CardContainer>
    )
}

export default CardSkills;