
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

`
export default GlobalStyle;