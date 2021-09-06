import Head from "next/head";
import Link from "next/link";
import Style from "../styles/page2.module.css";
import Layout from "../component/Layout";

export default function page2() {
  return (
    <Layout>
      <div className={Style.container}>
        <h1>welcom to my blog</h1>
        <p>
          <Link href="/">return</Link>
        </p>
      </div>
    </Layout>
  );
}
