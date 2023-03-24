import React, { useState } from "react";
import ReactPlayer from "react-player";

const Card = (props) => {
  const [playing, setPlaying] = useState(true);
  const { video, titulo, description, link } = props;

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div className="bg-blue-300 p-2 rounded-xl flex flex-col w-full items-center gap-2  text-gray-200">
      <ReactPlayer
        className="block w-full"
        url={video}
        playing={playing}
        onPause={handlePause}
        controls
      />
    </div>
  );
};

export default Card;
