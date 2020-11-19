import React from 'react';
import ReactPlayer from "react-player";

function Player(props) {
    return (
      <div className="d-flex justify-content-center">
        <ReactPlayer
          url={props.url}
          controls={true}
        />
      </div>
    );
}
export default Player;