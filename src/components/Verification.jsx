import GlobalStyle from "../GlobalStyle";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { db } from './authotication/firebase.js';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { Autocomplete, useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { IconButton, Button, Text, color } from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useUserAuth } from "./authotication/context/UserAuthContext.js";
import axios from "axios";
const BookRide = () => {
    <GlobalStyle />
    // const styling = { color: '#f8dc5d', fontSize: "25px" }
    const styleCal = {
        color: "#f8dc5d"
    }
    const style = {
        input: {
          "::placeholder": {
            color: "#f8dc5d"
          }
        }
      };
    //create Ride
    const { user } = useUserAuth();
    const [origin, setorigin] = useState('');
    const [destination, setdestination] = useState('');
    const [time, settime] = useState('');
    const [date, setdate] = useState('');
    const [cost, setcost] = useState('');
    const [seats, setseats] = useState('');
    const [published, setpublished] = useState('');

    const createRide = async (e) => {
        e.preventDefault(e)
        if (cost === '') {
            alert("Please Enter some Value");

            return;
        }
        await addDoc(collection(db, 'publishedRides'), {
            origin: origin,
            destination: destination,
            date: date,
            time: time,
            cost: cost,
            seats: seats,
            email: user.email,
        })
        setorigin('');
        setdestination('');
        setdate('');
        settime('');
        setcost('');
        setseats('');

    }

    var remove = false;
    function click() {
        var origin = document.getElementById('origin').value = '';
        var destination = document.getElementById('destination').value = '';
        var date = document.getElementById('date').value = '';
        var time = document.getElementById('time').value = '';
        var seats = document.getElementById('seats').value = '';
        var cost = document.getElementById('cost').value = '';


    }

    // function calculateAge(presentDate, dateOfBirth) {
    //     const presentYear = presentDate.getFullYear();
    //     const presentMonth = presentDate.getMonth();
    //     const presentDay = presentDate.getDate();
        
    //     const birthYear = dateOfBirth.getFullYear();
    //     const birthMonth = dateOfBirth.getMonth();
    //     const birthDay = dateOfBirth.getDate();
        
    //     let age = presentYear - birthYear;
        
    //     if (presentMonth < birthMonth || (presentMonth === birthMonth && presentDay < birthDay)) {
    //       age--;
    //     }
        
    //     return age;
    //   }

   
    //   const [presentDate, setPresentDate] = useState(new Date());
    //   const [dateOfBirth, setDateOfBirth] = useState(new Date('1965-01-01'));
      
    //   const age = calculateAge(presentDate, dateOfBirth);
      
    let formdata=new FormData();
    const filechange=(e)=>{
        console.log(e.target.files[0])
        if(e.target && e.target.files[0])
        {
            formdata.append('file',e.target.files[0]);
        }
    }
    const SubmitFileData=()=>{
        axios.post(
            'https://v2.convertapi.com/upload',
            (FormData)
        )
        .then(res=>{
            console.log(res);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
  
    const [gender, setGender] = useState('');
      
        const handleGenderChange = (event) => {
          setGender(event.target.value);
        }
                // event pr kuch bhi dal skte


    return (

       

        <>
           
            <div className="regs_container">
                <form action="" className="forming" onSubmit={createRide}>
                    <h1 style={{ fontSize: "40px", color: "#f8dc5d" }}>Verification</h1>
                    <div className="input-fields">
                       
                            <input type='text' placeholder="Name" style={styleCal}    />
                    </div>
                    <div className="input-fields">
                        
                    <input type="text" placeholder="Date of Birth" style={styleCal}/>
                       
                    </div>
                    <div   >
                    <select id="gender-select" value={gender} onChange={handleGenderChange} style={{width:"100px", background:"black", border:"3px #f8dc5d solid", color:"#f8dc5d"}}>
                            <option style={{width:"100px", background:"black", border:"5px #f8dc5d solid", color:"#f8dc5d"}} value="" >Gender</option>
                            <option style={{width:"100px", background:"black", border:"5px #f8dc5d solid", color:"#f8dc5d"}}value="male">Male</option>
                            <option style={{width:"100px", background:"black", border:"5px #f8dc5d solid", color:"#f8dc5d"}} value="female">Female</option>
                            <option style={{width:"100px", background:"black", border:"5px #f8dc5d solid", color:"#f8dc5d"}}value="other">Other</option>
                        </select>
                        </div>
                       
                   
                    <div className="input-fieldsi">
                        {/* <label htmlfor="" className="subinput"></label> */}
                        <div className="hello" style={{display:"flex",flexDirection:"column",margin:"15px"}}>
                        <label for="file_upload" className="subinput">Addhar Card</label>
                       <input type="file" name="file_upload" onChange={filechange} style={{color:"#f8dc5d" ,width:"10px",height:"8px",padding:"50px",borderRadius:"20px"}}  />
                      <Button onClick={SubmitFileData} >Submit Data</Button>
                      </div>
                      <div className="hello" style={{display:"flex",flexDirection:"column",margin:"15px"}}>
                       <label for="file_upload" className="subinput">Driving Lincense</label>
                       <input type="file" name="file_upload" onChange={filechange} style={{color:"#f8dc5d" ,width:"10px",height:"8px",padding:"50px"}} />
                       <p><Button onClick={SubmitFileData} >Submit Data</Button></p>
                       </div>
                    </div>



                    <button type="submit" className="btn" onClick={click} >
                        Publish My Ride
                    </button>

                </form>
            </div>
        </>
    )
}


export default BookRide


