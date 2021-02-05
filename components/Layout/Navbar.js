import Link from 'next/link';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>First Next.JS</h1>
      </div>

      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/user-list'>
        <a>User List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
