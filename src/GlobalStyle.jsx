
// import React from "react";
import {createGlobalStyle} from "styled-components";

const GlobalStyle=createGlobalStyle`

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: gt-eesti, "Helvetica Neue", Helvetica, Arial, sans-serif;
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
   width:70%;
   
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

${'' /* .main-div{
    display:flex;
    align-items:center;

} */}

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

}
.rightchild {
   
    display:flex;
    list-style-type:none;
    width:50%;
    justify-content:flex-end;

   
}
`
export default GlobalStyle;