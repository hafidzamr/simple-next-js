import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title> Home Page</title>
      </Head>
      <Layout>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis
          accusantium vitae error ullam, nam hic quasi modi eos magnam veniam
          voluptatem provident blanditiis aliquam!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis
          accusantium vitae error ullam, nam hic quasi modi eos magnam veniam
          voluptatem provident blanditiis aliquam!
        </p>
      </Layout>
    </>
  );
}
