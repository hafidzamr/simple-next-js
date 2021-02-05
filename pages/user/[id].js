import Layout from '../../components/Layout/Layout';
import Head from 'next/head';

const UserDetail = ({ user }) => {
  return (
    <>
      <Head>
        <title>Detail - {user.name}</title>
      </Head>
      <Layout>
        <h1>Detail Page</h1>
        <ul style={{ listStyleType: 'none' }}>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.username}</li>
          <li>{user.address.city}</li>
        </ul>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const datas = await response.json();

  const paths = datas.map(data => {
    return {
      params: { id: data.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async context => {
  //   console.log('context: ', context);
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { user: data }
  };
};
export default UserDetail;
