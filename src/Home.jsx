import React from "react";
import "./font.css"
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle.jsx";
const Home = () => {

    <GlobalStyle />
    const mystyle = {
        fontFamily: "'Dancing Script', cursive",
        color: "black",
        padding: "5%",
        margin: "5%",
        lineHeight: "250%",
        border: "5px solid black",
        borderRadius: "20%",
        fontSize: "35px"
    };
    return (
        <>
           
            {/* <SplitBackground/> */}
            <div>
                <p style={mystyle} >
                        <span className="s0" style={{fontFamily:"'Dancing Script', cursive"}}>"</span><span className="s1" style={{fontFamily:"'Dancing Script', cursive"}}>R</span><span className="s2" style={{fontFamily:"'Dancing Script', cursive"}}>O</span><span className="s3" style={{fontFamily:"'Dancing Script', cursive"}}>W</span><span className="s4" style={{fontFamily:"'Dancing Script', cursive"}}>E</span><span className="s5" style={{fontFamily:"'Dancing Script', cursive"}}>R</span> taxi dolor sit amet consectetur adipisicing elit. Inventore quidem laboriosam, maxime debitis aspernatur magnam illum ullam aliquam quasi distinctio, omnis rerum nisi ipsum porro magni necessitatibus. Eveniet, molestiae suscipit!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laudantium minus adipisci, nesciunt eveniet non, illo ipsam deserunt facere facilis hic natus corporis, suscipit voluptatibus. 
                        
                        
                    
                </p>
            </div>
        </>
    )
}

export default Home;