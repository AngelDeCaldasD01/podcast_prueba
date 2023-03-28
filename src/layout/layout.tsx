import React from 'react';
import Header from '../components/header/header';
import './layout.scss';

interface Layout {
  children: React.ReactNode;
}

export const Layout = (props: Layout) => {
  const { children } = props;

  return (
    <>
      <div className="layout">
        <Header />
        <main className="content">{children}</main>
      </div>
    </>
  );
};
