import React from "react";
// import { icons } from "react-icons";

const Registration=()=>
{
    // const styling = { color: '#f8dc5d', fontSize: "25px" }
    return(
        <>
            <div className="regs_container">
                <form action="" className="forming">
                    <div className="input-fields">
                        <label htmlfor="username" ></label>
                        <input type='text'  placeholder="Leaving to..."/>
                    </div>
                    <div className="input-fields">
                    <label htmlfor="username"></label>
                        <input type='text' placeholder="Going to..."/>
                    </div>
                    <div className="input-fieldsi">
                    {/* <label htmlfor="" className="subinput"></label> */}
                    <input type='date'  className="inputing"/>
                    <label htmlfor="username"></label>
                        <input type='text'  className="inputing"/>
                
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
