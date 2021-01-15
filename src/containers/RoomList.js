import React from "react";
import {Card ,Typography } from "@material-ui/core";
import styled from 'styled-components';
export default function RoomList(){
  return (
    <Card className = "Room" id="room">
      <Typography className="room_name" id="room_name">
        ThE RoOm
      </Typography>
    </Card>
  )
}
const StyledCard = styled(Card)
`
    height: 87vh;
    border-radius: 35px;
    padding: 2vh;
    background: #434343bd;
`
