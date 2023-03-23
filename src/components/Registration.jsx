import React from "react";
// import { icons } from "react-icons";

const Registration = () => {
    // const styling = { color: '#f8dc5d', fontSize: "25px" }
    var styleCal = {
        color: "#f8dc5d"
        
    }


    

    return (
        <>
            <div className="regs_container">
                <form action="" className="forming">
                    <h1 style={{ fontSize: "40px", color: "#f8dc5d" }}>Enter trip details:</h1>
                    <div className="input-fields">
                        <label htmlfor="username" ></label>
                        <input type='text' placeholder="Leaving from..." />
                    </div>
                    <div className="input-fields">
                        <label htmlfor="username"></label>
                        <input type='text' placeholder="Going to..." />
                    </div>
                    <div className="input-fieldsi">
                        {/* <label htmlfor="" className="subinput"></label> */}
                        <input type='date' className="inputing"  style={styleCal} />
                        <label htmlfor="username"></label>
                        <input type='number' className="inputing" placeholder="Passenger..." style={{ color: "#f8dc5d" }} />

                    </div>

                    <button type="button" className="btn">
                        Search
                    </button>

                </form>
            </div>
        </>
    )
}
export default Registration;
