import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I'm Minju. I'm Web Developer!! I'm just trying to make new page.
          This is my practice for toy project which is about writing what kind
          of books you read
        </p>
      </section>
      <button className={utilStyles.linkBtn}>
        <Link href="/posts/first-post">
          <a>Go to other page →</a>
        </Link>
      </button>
    </Layout>
  );
}
