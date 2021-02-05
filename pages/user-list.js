import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/UserList.module.css';

const UserList = ({ users }) => {
  return (
    <>
      <Head>
        <title> User List</title>
      </Head>
      <Layout>
        <h1>Hello this User List</h1>
        {users.map(user => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: { users: data }
  };
};
export default UserList;
