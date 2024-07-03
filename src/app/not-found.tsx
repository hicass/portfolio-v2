import { FC } from 'react';

import Link from 'next/link';

import './main.css';

const NotFoundPage: FC = () => {
  return (
    <section className="content-area">
      <h3>Ooopsiez! Nothing here...</h3>
      <p><Link href="/">Click me</Link> to return back</p>
    </section>
  );
};

export default NotFoundPage;
