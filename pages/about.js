import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';
const About = () => {
  return (
    <>
      <Head>
        <title> About</title>
      </Head>
      <Layout>
        <h3 className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum aut
          molestiae cumque quisquam sit ullam doloribus, consequuntur
          recusandae! Aut rerum, enim officiis reiciendis dolor aliquid
          temporibus quos sint id delectus, eius natus, molestias esse
          reprehenderit amet! Obcaecati quasi consequatur vitae minima
          reiciendis sit accusantium necessitatibus praesentium, illo officiis
          ut veniam dignissimos ducimus dolorum sequi reprehenderit. Iure,
          itaque tempore! Saepe minus veniam fugit tenetur dicta? Consequuntur
          voluptatum eaque dolores quaerat aspernatur labore quae esse qui
          repudiandae, eos nisi pariatur dicta doloribus quidem tempore ea autem
          quam provident sunt asperiores! Id sit esse in porro eum omnis vel
          officiis, tempora nulla.
        </h3>
      </Layout>
    </>
  );
};

export default About;
