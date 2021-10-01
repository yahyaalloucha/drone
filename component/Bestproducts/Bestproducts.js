import { keys } from "@material-ui/core/styles/createBreakpoints";
import Style from "./Bestproducts.module.css";
import { createPortableTextComponent } from "next-sanity";
export default function Bestproducts({ bestproducts }) {
  console.log(bestproducts);
  const copybestproducts = bestproducts.slice(1);
  console.log(copybestproducts);
  const PortableText = createPortableTextComponent({
    serializers: {},
  });

  return (
    <div className={Style.container}>
      <div
        className={Style.div}
        style={{
          background: `url(${bestproducts[0].posterImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={Style.header}>
        <h1 className={Style.h2}>{bestproducts[0].title}</h1>
        <h2 className={Style.h2}>{bestproducts[0].info}</h2>
      </div>
      {copybestproducts.map((x) => {
        return (
          <div className={Style.content}>
            <h1 className={Style.title}>{x.title}</h1>
            <p className={Style.p}>{x.info}</p>
            <img src={x.posterImage} className={Style.imginfo} />
            <h2 className={Style.head}>{x.head}</h2>
            <p className={Style.features}>
              {" "}
              <PortableText blocks={x.features} />
            </p>
            <video className={Style.Video} autoPlay muted loop={true}>
              <source src={x.videoUrl} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
}
