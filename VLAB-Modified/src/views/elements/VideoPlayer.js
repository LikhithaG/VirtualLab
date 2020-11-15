import React, { Component } from 'react';
import ReactPlayer from "react-player";

function Player() {
    return (
      <div className="d-flex justify-content-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=MrIZMuvjTws"
          controls={true}
        />
      </div>
    );
}
export default Player;