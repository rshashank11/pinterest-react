import React from "react";

const ImageCard = ({ imageURL, index }) => {
  const gridRowEndValues = ["span 26", "span 33", "span 45"];
  const randomGridRowEnd =
    gridRowEndValues[Math.floor(Math.random() * gridRowEndValues.length)];
  return (
    <div
      className="mx-3 bg-black my-3 rounded-3xl"
      style={{ gridRowEnd: `${randomGridRowEnd}` }}
    >
      <img
        key={index}
        className={`p-0 rounded-2xl h-full object-cover object-center`}
        src={`${imageURL}`}
      />
    </div>
  );
};

export default ImageCard;
