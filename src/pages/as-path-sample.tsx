import { useRouter } from 'next/router';

const AsPathSample = () => {
  const router = useRouter();
  const path = router.asPath;

  return <h1>このページの path は {path} です。</h1>;
};

export default AsPathSample;
