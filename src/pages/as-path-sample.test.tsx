import { cleanup, render } from '@testing-library/react';
import * as nextRouter from 'next/router';
import AsPathSample from './as-path-sample';

describe('初期表示', () => {
  afterEach(cleanup);

  test('as-path-sampleページ表示', async () => {
    const push = jest.fn();
    jest.spyOn(nextRouter, 'useRouter').mockImplementation(() => ({
      asPath: '/test-path',
      query: {
        page: 'log',
      },
      route: '/',
      pathname: '/',
      basePath: '/',
      isLocaleDomain: true,
      isReady: true,
      push,
      prefetch: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isPreview: false,
    }));

    const { getByText } = render(<AsPathSample />);
    expect(push).toHaveBeenCalledTimes(0);
    expect(
      getByText('このページのpathは"/test-path"です。')
    ).toBeInTheDocument();
  });

  test('loginページ遷移', async () => {
    const push = jest.fn();
    jest.spyOn(nextRouter, 'useRouter').mockImplementation(() => ({
      asPath: '/test-path',
      query: {
        page: 'login',
      },
      route: '/',
      pathname: '/',
      basePath: '/',
      isLocaleDomain: true,
      isReady: true,
      push,
      prefetch: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isPreview: false,
    }));

    render(<AsPathSample />);
    expect(push).toHaveBeenCalledWith('/login');
  });
});
