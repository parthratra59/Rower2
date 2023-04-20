
// import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: gt-eesti, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color:black;
    font-size:18px;
   
}

.parent
{
    ${'' /* position:relative; */}
    display:flex;
    height:100vh;
    width:100%
   
}
//Hi this is a comment;
.child-1{
    ${'' /* position:absolute; */}
   background:black;
  
    
   height:100vh;
   width:100%;
   
   ${'' /* background-size:cover; */}
   ${'' /* background-position:50% 15%; */}
   
}
.child-2{
    ${'' /* position:absolute; */}
   
    background:#f8dc5d;
    height:100vh;
    width:100%;

    ${'' /* background-size:cover; */}

   
}
#icons{
    float:left;
    vertical-align:bottom;
    margin-right:3px;
    height:1.2rem;
    ${'' /* padding: .5em; */}
    ${'' /* line-height: 1.22; */}
}

header{
    width:100%;
}
.main{
    display:flex;
   
    width:100%;
   
}
.leftchild{
     
    display:flex;
    list-style-type:none;
    width:50%;
    gap:13px;
    

}

.rightchild {
   
    display:flex;
    list-style-type:none;
    width:50%;
    justify-content:flex-end;
    margin-right:0%;
    align-items:center;
    ${'' /* font-size:5px; */}
  

   
}
.sub-child {
    ${'' /* position:absolute; */}
    display:flex;
    align-items:center;
    ${'' /* justify-content:center; */}
    
    height:150%;
    width:30%;
    color:black;
    ${'' /* margin:100px; */}
    padding-left:8px;
   border:2px solid black;
   transition:1s ease-in-out;
   
    ${'' /* background:black; */}
    border-radius:20px;
    
}

.add{
    ${'' /* display:flex; */}
    margin-right:4px;
    ${'' /* justify-content:center;
    align-items:center; */}
}
.signbtn{
    display:flex;
    align-items:center;
    justify-content:center;
    
    ${'' /* padding-left:15px; */}
}


.design{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:5px;
   
}
.navlink{
    display:flex;
    align-items:center;
    justify-content:center;

}

${'' /* logo desingn */}
.landing-logo{
    position:relative;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:35%;
    margin-left:35%;
     
}

.landing-logo h1{
    color:#f8dc5d;
    font-size:50px;
}
.landing-logo p{
    transform:translateX(-3%);
    font-size:30px;
    color:#f8dc5d;
    align-text:center;   
}
.landing-logo img{
    width:20%;
    height:30%;
    transition:1s ease-in-out;
}
.landing-logo img:hover{
    transform:translateY(-30%);
    transform:translateX(30%);
    width:40%;
    height:50%;
}

// Home Page Paragraph

.homeParagraph span{
    font-size:40px;
    color:#f8dc5d;
    transition:0.08s ease-in-out;
}

.homeParagraph span:hover{
    font-size:70px;
}
.s0{
    font-size:200px;
}

${'' /* Registration form */}
.regs_container
{
    width:100%;
    height:90%;
    display:flex;
    align-items:center;
    justify-content:center;   
    ${'' /* z-index:'modal'; */}
}



form{
    width:55%;
    ${'' /* max-width:400px; */}
    border:2px solid black;
    padding:25px;
    border-radius:25px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:black;
    margin:5px;

  
   ${'' /* justify-content:center; */}
}
.input-fields{
    margin-top:25px;
    margin-bottom:15px;
    border:2px solid #f8dc5d;
   border-radius:15px;
}


input{
    width:360px;
    padding:10px;
    color:#f8dc5d;
    border:2px solid #f8dc5d;
    font-size:15px;
    border-radius:15px;
    outline:0;
    background:transparent;
    color:black;
}
label{
    position:absolute;
    height:30%;
    padding:10px;
    color:#f8dc5d;
    border
}

.btn{
    padding: 10px;
    background:black;
    color:#f8dc5d;
    font-size:15px;
    border-radius:10px;
    border:1px solid #f8dc5d;
    cursor:pointer;
    margin-top:15px;
}

.input-fieldsi{
    ${'' /* position:"absolute"; */}
    display:flex;
    ${'' /* flex-direction:column; */}
    justify-content:center;
    align-items:center;
    ${'' /* justify-content:center; */}
    
    ${'' /* margin:15px; */}
    ${'' /* margin-right:20%; */}
    padding:10px;
}

.inputing{
    border-radius:15px;
    width:160px;
    margin:4px;
}
.subinput{
    position:relative;
    width:70px;
}

// Css for customerCard
.customerCardDiv1{
      color:"black",
      border:"5px solid black",
      height:"300px",
      width:"500px",
      borderRadius:"20px",
      padding:"10px",
      backgroundColor:"white",
      marginLeft:"200px"
}

.loginDiv{
    border:2px solid black;
    margin:100px;
    margin-left:20%;
    padding:20px;
    position:relative;
    justify-content:center;
    align-items:center;
    border-radius:30px;
    width:60%;
    background-color:black;
}
.formGroup{
    margin:10px;
    margin-left:10%;
    background-color:black;
    border:1px solid #f8dc5d;
    border-radius:15px;
    
}

`
export default GlobalStyle;