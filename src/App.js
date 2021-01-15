import logo from './logo.svg';
import React from "react"
import  MessageList from "./containers/MessageList"
import SendMessageForm from "./containers/SendMessageForm"
import NewRoomList from "./containers/NewRoomList";
import RoomList from "./containers/RoomList"
import './App.css';
import Background from "./Confetti-Doodles.svg"
class App extends React.Component{

  // componentDidMount(){
  //   const chatManager = new firebase.ChartManager({
  //     instanceLocator,
  //     userId:'perborgen',
  //     tokenProvider : new ChatKit.TokenProvider({
  //       url:tokenUrl
  //     })
  //   })
  //   chatManager.connect()
  //     .then(currentUser => {
  //       currentUser.subscribeToRoom({
  //         roomId:
  //       })
  //     })
  // }
  render(){
  return (
      <div className="App" style={{background:`url(${Background})`, width :'-webkit-fill-available' ,height:'-webkit-fill-available' ,position:'absolute'}}>

        <SendMessageForm />
        <NewRoomList />
        <RoomList />
      </div>
    );
  }
}

export default App;
