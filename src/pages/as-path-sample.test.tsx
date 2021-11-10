import { render } from '@testing-library/react';
import AsPathSample from './as-path-sample';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      basePath: '/',
      isLocaleDomain: true,
      isReady: true,
      push: jest.fn(),
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
    };
  },
}));

describe('初期表示', () => {
  test('サンプルページ', () => {
    const { asFragment } = render(<AsPathSample />);
    expect(asFragment()).toMatchSnapshot();
  });
});
