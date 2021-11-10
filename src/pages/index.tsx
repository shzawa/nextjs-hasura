import styles from '../styles/Home.module.css';
import { Articles } from '~/components/Articles';

const Home = () => {
  return (
    <div className={styles.container}>
      <Articles />
    </div>
  );
};

export default Home;
