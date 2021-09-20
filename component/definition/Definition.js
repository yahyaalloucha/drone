import { styled } from "@material-ui/styles";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import Style from "./Definitin.module.css";
export default function Definition({ def }) {
  console.log(def);
  return (
    <div className={Style.container}>
      {def?.length > 0 && (
        <div
          className={Style.container1}
          style={{
            background: `url(${def[0].posterImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className={Style.h1}>{def[0].title}</h1>
          <div className={Style.definition}>
            <p>{def[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
