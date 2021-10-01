import link from "next/link";
import client from "../lib/client";

import styles from "../styles/Home.module.css";
import Bestproducts from "../component/Bestproducts/Bestproducts";

const bestpro = `*[_type=='mybestpro'] {
    title,
     "posterImage":poster.asset->url,
     "videoUrl": Vid.asset->url,
     features,
     head,
     info,
   }`;

export default function Products({ products }) {
  return (
    <div>
      <Bestproducts bestproducts={products} />
    </div>
  );
}
export async function getStaticProps() {
  const products = await client.fetch(bestpro);

  return {
    props: {
      products,
    },
  };
}
