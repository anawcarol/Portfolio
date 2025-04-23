import React from "react";
import {CardTec} from "./styled";


function Tecs ({title, icon, description}){
    return (
        <CardTec>
            {icon}
            <span className="title">{title}</span> 
            <span className="description">{description}</span>

            
            
        </CardTec>
    );
}

export default Tecs;