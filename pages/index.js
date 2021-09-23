import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../component/Header/Header";
import Link from "next/link";
import page2 from "./page2";
import Screen from "../component/Screen/Screen";
import Definition from "../component/definition/Definition";
import client from "../lib/client";

const data = `*[_type=='screen'] {
  title,
  "videoUrl": vid.asset->url
}`;
const def = `*[_type=='definition'] {
  title,
  "posterImage":poster.asset->url,
   description
 
}`;
const aboutdiv = `*[_type=='about'] {
  title,
  info,
 "posterImage":poster.asset->url
}
`;

export default function Home({ information, definition, about }) {
  console.log(information);
  console.log(definition);

  const info = { information };
  const def = { definition };
  const ab = { about };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>Drone_Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Screen info={information} />
      <Definition def={definition} about={about} />
    </div>
  );
}
export async function getStaticProps() {
  const information = await client.fetch(data);
  const definition = await client.fetch(def);
  const about = await client.fetch(aboutdiv);
  return {
    props: {
      information,
      definition,
      about,
    },
  };
}
