import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, redirectTime);
  }, []);

  return <h1>Hoaaaam !</h1>;
};

export default Redirect;
