import { Link } from 'react-router-dom';

import css from './NotFound.module.css';
const NotFound = () => {
  return (
    <>
      <h1 className={css.title}>Pages Not Found</h1>
      <Link to="/" className={css.link}>Home</Link>
    </>
  );
};

export default NotFound;
