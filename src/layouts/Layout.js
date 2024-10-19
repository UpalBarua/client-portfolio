import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import Preloader from "../layouts/Preloader";
import {
  dataImage,
  devman_tm_moving_animation,
  imgToSVG,
  wowJsAnimation,
} from "../utilits";
const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
    imgToSVG();
    wowJsAnimation();
    devman_tm_moving_animation();
  }, []);

  return (
    <div>
      <Preloader />
      <VideoPopup />
      <ImageView />
      <div className="devman_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </div>
  );
};
export default Layout;
