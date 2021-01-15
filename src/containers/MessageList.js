import React from "react";
// import {Paper} from @material-ui/core;
import {Paper ,Container,Typography,Button} from '@material-ui/core';
import styled from "styled-components";
const DUMMYDATA = [
    {
        sender_id : "perborgen",
        type:"sender",
        text : "Hey , how you doing ?",
    },
    {
        sender_id : "janedoe",
        type:"reciever",
        text : "Great . How about You ?",
    },
    {
        sender_id : "perborgen",
        type:"sender",
        text : "good to hear , i'm great!!!"
    }
]
export default class MessageList extends React.Component {

    render(){
        return (

            <div className = "_messagelist"style = {{marginTop:'9vh' , padding :'2vh'}}>
              <Paper className="messageport" id="messageport">
                {
                        DUMMYDATA.map((message,index)=>{
                            return (
                                <div className="mesage" key ={index}>

                                      <div>{message.sender_id}</div>
                                      <div>{message.text}</div>

                                </div>
                            )
                        })}
              </Paper>
            </div>

        )
    }
}
const StylePaper = styled(Paper)`
  background-color:#ffffff38;
  position:relative;
  height:91vh ;
  border-radius:35px;
  margin-top:9.9vh;
`
// here We wil implement the paper for all the chats and Ui will get hendrerit
// function MessagePart(){
//   return (
//     <div className  = "Paper">
//
//       <Paper>
//
//       </Paper>
//     </div>
//   )
// }
//
// // export default Header
