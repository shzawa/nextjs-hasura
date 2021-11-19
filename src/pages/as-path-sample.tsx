import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AsPathSample = () => {
  const router = useRouter();
  const path = router.asPath;
  const { page } = router.query;

  useEffect(() => {
    page === 'login' && router.push('/login'); // FIXME
  }, [page, router]);

  return (
    <>
      <h1>このページのpathは{`"${path}"`}です。</h1>
    </>
  );
};

export default AsPathSample;
