
// import React from "react";
import { createGlobalStyle } from "styled-components";
import './font.css';

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


.s0{
    font-size:70px;
}
.s1{
    font-size:60px;
}
.s2{
    font-size:50px;
}
.s3{
    font-size:40px;
}
.s4{
    font-size:30px;
}
.s5{
    font-size:25px;
}`
export default GlobalStyle;