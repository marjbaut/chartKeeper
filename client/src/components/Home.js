import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const Home= () =>{

    const location = useLocation()
    
    return(
        <div>
            <h1>hello {location.state.id} welcome home</h1>
             </div>
    )
}