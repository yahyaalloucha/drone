import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <h1>this is my</h1>
      <div>{children}</div>
    </div>
  );
}
