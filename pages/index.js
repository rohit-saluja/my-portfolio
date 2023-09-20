import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="posts/first-post">Go to next page</Link>
        <p className="bg-blue-600">[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
