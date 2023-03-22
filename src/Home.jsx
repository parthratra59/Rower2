import React from "react";


import GlobalStyle from "./GlobalStyle.jsx";
const Home = () => {

    <GlobalStyle />
    const mystyle = {
        fontFamily:"'Roboto Mono', monospace" ,
        color: "black",
        padding: "5%",
        margin: "5%",
        lineHeight: "150%",
        border: "5px solid black",
        borderRadius: "15%",
        fontSize: "35px"
    };
    return (
        <>
           
            {/* <SplitBackground/> */}
            <div>
                <p style={mystyle} >
                    <blockquote><h1>Whenever you see a successful business, someone once made a courageous decision. ~Peter F. Drucker</h1></blockquote>
                        <span className="s0" style={{fontFamily:"'Roboto Mono', monospace" }}>"</span><span className="s1" style={{fontFamily:"'Roboto Mono', monospace" }}>R</span><span className="s2" style={{fontFamily:"'Roboto Mono', monospace" }}>O</span><span className="s3" style={{fontFamily:"'Roboto Mono', monospace" }}>W</span><span className="s4" style={{fontFamily:"'Roboto Mono', monospace"}}>E</span><span className="s5" style={{fontFamily:"'Roboto Mono', monospace"}}>R</span> taxi dolor sit amet consectetur adipisicing elit. Inventore quidem laboriosam, maxime debitis aspernatur magnam illum ullam aliquam quasi distinctio, omnis rerum nisi ipsum porro magni necessitatibus. Eveniet, molestiae suscipit!
                        Lorem ipsum.
                        
                        
                    
                </p>
            </div>
        </>
    )
}

export default Home;