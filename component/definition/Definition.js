import { styled } from "@material-ui/styles";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import Style from "./Definitin.module.css";
import About from "../About/About";
import { AppBar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export default function Definition({ def, about, card1, card2 }) {
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
          <About aboutdiv={about} card1={card1} card2={card2} />
        </div>
      )}
    </div>
  );
}
