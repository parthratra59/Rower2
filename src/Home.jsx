import React from "react";


import GlobalStyle from "./GlobalStyle.jsx";
const Home = () => {

    <GlobalStyle />
    const mystyle = {
        fontFamily: "'Roboto Mono', monospace",
        color: "#f8dc5d",
        padding: "5%",
        margin: "5%",
        lineHeight: "150%",
        border: "5px solid black",
        borderRadius: "25px",
        fontSize: "35px",
        backgroundColor: "black",
        textAlign: "center"
    };
    const mystyleH1 = {
        fontFamily: "'Roboto Mono', monospace",
        color: "#f8dc5d",
        lineHeight: "200%",
        borderRadius: "25px",
        fontSize: "30px",
        backgroundColor: "black",
        textAlign: "center"
    };
    return (
        <>

            {/* <SplitBackground/> */}
            <div>
                <p style={mystyle} className="homeParagraph">
                    <h1 style={mystyleH1}>&lt;&gt;</h1>
                    <span className="s0">"</span><span className="s1">R</span><span className="s2">O</span><span className="s3" >W</span><span className="s4">E</span><span className="s5">R</span> TAXI PROVIDE CHEAP AND FUN  TRAVEL  TO THE STUDENTS,   AND HELP  THEM POOL TAXI’S
                    EASILY~! TRAVELLING MINIMUM 30KM TO REACH THER HEART OF THE PINK CITY HAS ALWAYS LED TO EMPTY POCKETS OF STUDENTS.
                    -!NOT ANYMORE!-

                    <h1 style={mystyleH1}>&lt;/&gt;</h1>
                </p>
            </div>
        </>
    )
}

export default Home;