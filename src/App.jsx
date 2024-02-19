import { useDispatch } from "react-redux";
import "./App.css";
import NavBar from "./Components/NavBar";
import { getImages } from "./api/Images";
import { useLoaderData } from "react-router";
import { useEffect } from "react";
import { addImages } from "./utils/imageSlice";

import ImagesContainer from "./Components/ImagesContainer";

function App() {
  const dispatch = useDispatch();
  const { images } = useLoaderData();
  // console.log(images);
  useEffect(() => {
    dispatch(addImages(images.hits));
  }, [images]);
  return (
    <>
      <NavBar />
      <ImagesContainer />
    </>
  );
}

const loader = async () => {
  const images = await getImages("q=food&per_page=200");
  return { images };
};

export const imagesRoute = {
  loader,
  element: <App />,
};
