import React from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

const ImagesContainer = () => {
  const images = useSelector((state) => state.image.images);

  return (
    <div
      style={{
        gridAutoRows: "10px",
        gridTemplateColumns: "repeat(auto-fill, 236px)",
      }}
      className="m-0 p-0 absolute mt-[100px] w-full justify-center grid"
    >
      {images.map((image, index) => {
        return <ImageCard imageURL={image.largeImageURL} index={index} />;
      })}
    </div>
  );
};

export default ImagesContainer;
