import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Articles } from '~/components/Articles';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Articles />
    </div>
  );
};

export default Home;
