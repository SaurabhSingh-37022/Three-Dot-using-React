import './ThreeDot.css'
import React, {useState} from 'react';

function ThreeDot(){
    const [myObj,setMyObj] = useState({
        myName: "Saurabh", myAge: 22, myDegree: "BE"        
    });
    function changeObj(){
        
        setMyObj({...myObj, myName: "Rajput" })

    }
    return(
        <div className="obj">
            <h1>Name: {myObj.myName} & Age: {myObj.myAge} & Degree: {myObj.myDegree}</h1>
            <button className="btn" onClick={changeObj}>Update</button>


        </div>
    )
}
export default ThreeDot;