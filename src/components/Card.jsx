import React from "react";

const Card = (props) => {
  const { video, titulo, description, link } = props;
  return (
    <div className="bg-blue-300 p-8 rounded-xl flex flex-col w-full items-center gap-2 text-center text-gray-200">
      <video >{video}</video>
      <h3 className="text-2xl">{titulo}</h3>
      <p className="text-xl">{description}</p>
      <a href="https://www.youtube.com/watch?v=nXpB1rixnPQ">{link} Ver curso</a>
    </div>
  );
};

export default Card;
  