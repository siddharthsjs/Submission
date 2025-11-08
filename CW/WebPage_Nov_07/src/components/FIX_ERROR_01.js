// issue fixed bug 1
import React from "react";
const baseUrl="https://www.hdwallpapers.in/download/sumatran_tiger_in_zoo_4k-720x1280.jpg";
const person={
    name:"SID",
    imageId:"7vQD0fp",
    imageSize:'s',
    theme:{
        backgroundColor:'black',//issue fixed bug 2
        color:'pink',
    }
};
export default function FIX_ERROR_01(){
    const a = baseUrl + person.imageId + person.imageSize + ".jpg";///issue fixed
    return(
        <div style={person.theme}>
        {/* issue fixed  bug 3*/}
         <h1>{person.name}'s TO DO's</h1>
         <img className="avatar"
         src={a} height={100} //introduced new issue
         alt={person.name}
         />
         <ul>
            <li>EAT</li>
            <li>SLEEP 2</li>
            <li>REPEAT</li>
         </ul>
        </div>//issue fixed bug no 4
    );
}