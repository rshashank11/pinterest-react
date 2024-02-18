import { createBrowserRouter } from "react-router-dom";
import { imagesRoute } from "../App";

export const router = createBrowserRouter([{ path: "/", ...imagesRoute }]);
