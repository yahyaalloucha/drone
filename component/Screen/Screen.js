import Style from "./Screen.module.css";

import "react-videoplayer/lib/index.css";

export default function Screen({ info }) {
  return (
    <div className={Style.Screen}>
      {info?.length > 0 && (
        <video className={Style.Video} autoPlay muted loop={true}>
          <source src={info[0].videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
