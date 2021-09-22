import Style from "./About.module.css";

export default function About({ aboutdiv }) {
  console.log(aboutdiv);
  return (
    <div className={Style.container}>
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
          <p className={Style.learnmore}>Learn more here </p>
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
          <p className={Style.learnmore}>Learn more</p>
        </div>
      )}
    </div>
  );
}
