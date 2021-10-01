import Style from "./About.module.css";
import { useState } from "react";
import Modalrules from "./Moadalrules";
import { ST } from "next/dist/shared/lib/utils";

export default function About({ aboutdiv, card1, card2 }) {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const minicard1 = card1.slice(1);
  const minicard2 = card2.slice(1);

  return (
    <div className={Style.container}>
      {show && (
        <div
          onClick={() => {
            setShow(false);
          }}
          className={Style.dd}
        >
          <div className={Style.containercard1}>
            <h1 className={Style.headercard}>{card1[0].titofdef}</h1>
            <img src={card1[0].posterImage} className={Style.imgcard1} />
            {minicard1 &&
              minicard1.map((x) => {
                return (
                  <div className={Style.companies}>
                    <h1 className={Style.namecompany} href={x.Url}>
                      <a href={x.Url}>{x.titofdef}</a>
                    </h1>
                    <p className={Style.description}>{x.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      {modal && (
        <div
          onClick={() => {
            setModal(false);
          }}
          className={Style.dd}
        >
          <div className={Style.containercard1}>
            <h1 className={Style.headercard}>{card2[0].titofdef}</h1>
            <img src={card2[0].posterImage} className={Style.imgcard1} />
            {minicard2 &&
              minicard2.map((x) => {
                return (
                  <div className={Style.companies}>
                    <h1 className={Style.namecompany} href={x.Url}>
                      <a href={x.Url}>{x.titofdef}</a>
                    </h1>
                    <p className={Style.description}>{x.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {aboutdiv && (
        <div
          className={Style.cardrules}
          style={{
            background: `url(${aboutdiv[1].posterImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className={Style.h1}>{aboutdiv[1].title}</h1>
          <p className={Style.p}>{aboutdiv[1].info}</p>
          <p
            className={Style.learnmore}
            onClick={() => {
              setModal(true);
            }}
          >
            Learn more here{" "}
          </p>
        </div>
      )}
      {aboutdiv && (
        <div
          className={Style.cardbestcompanies}
          style={{
            background: `url(${aboutdiv[0].posterImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className={Style.h1}>{aboutdiv[0].title}</h1>
          <p className={Style.p}>{aboutdiv[0].info}</p>
          <p
            className={Style.learnmore}
            onClick={() => {
              setShow(true);
            }}
          >
            Learn more
          </p>
        </div>
      )}
    </div>
  );
}
