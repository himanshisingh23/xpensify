import React from 'react';



export const Footer = () => {

    
    const name = "Himanshi";
    const currentDate = new Date();
    const year = currentDate.getFullYear();


    return (
        
       <div className="footerdiv">
            <hr></hr>
            <div className="footer">
            <p> Created by {name} © {year} </p>
            </div>
            
       </div>
    )
}
