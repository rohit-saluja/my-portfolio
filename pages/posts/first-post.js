import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title> this is the first post</title>
      </Head>
      <div>
        <h1>First post</h1>
        <Link href="/"> Home page</Link>
      </div>
    </Layout>
  );
}
