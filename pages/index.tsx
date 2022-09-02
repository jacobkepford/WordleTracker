import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import prisma from "../lib/prisma";

// interface Score {
//   score_id: number;
// }
// interface HomeProps {
//   score: Score[];
// }

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wordle Tracker </title>
        <meta name="description" content="Track your Wordle group scores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">Worlde Tracker</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Upload scores &rarr;</h2>
            <p>Upload your score to the tracker</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Administration &rarr;</h2>
            <p>Access administration features of the application</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Wileskep</p>
      </footer>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const score = await prisma.score.findMany({
//     select: {
//       score_id: true,
//     },
//   });
//   return {
//     props: { score },
//   };
// };

export default Home;
