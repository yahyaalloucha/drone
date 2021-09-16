import Style from "./Screen.module.css";
import ReactPlayer from "react-player";
import { useState } from "react";

import "react-videoplayer/lib/index.css";

export default function Screen({ info }) {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className={Style.Screen}>
      {info?.length > 0 && (
        <div className={Style.ReactPlayer}>
          <video className={Style.Video} autoplay muted>
            <source src={info[0].videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}
