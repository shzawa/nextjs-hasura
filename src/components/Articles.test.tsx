import {
  act,
  render,
  cleanup,
  screen,
  RenderResult,
} from '@testing-library/react';
import { GqlServerArticles } from '~/api/types';
import { Articles } from './Articles';
import { gqlClient } from '~/api/client';
import { SWRConfig } from 'swr';
import type { ErrorReponseType } from '../api/type';

const dummyArticles: GqlServerArticles = {
  _helloworld_article: [
    {
      id: 1,
      title: 'aaa',
      rating: 1,
      created_at: new Date(),
      author_id: 1,
      author: {
        id: 2,
        name: 'test02',
      },
    },
    {
      id: 2,
      title: 'bbb',
      rating: 2,
      created_at: new Date(),
      author_id: 2,
      author: {
        id: 2,
        name: 'test02',
      },
    },
    {
      id: 3,
      title: 'ccc',
      rating: 1,
      created_at: new Date(),
      author_id: 1,
      author: {
        id: 1,
        name: 'test01',
      },
    },
  ],
};

const errorResponse: ErrorReponseType = {
  path: '$',
  code: 'no-found',
  error: 'hogehoge',
  status: 404,
  headers: {
    map: {
      'content-type': '"application/json; charset=utf-8"',
    },
  },
};

let gqlClientRequestSpy: jest.SpyInstance<unknown>;

const testRender = (children: React.ReactNode): RenderResult => {
  return render(
    <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
  );
};

afterEach(cleanup);

beforeEach(() => {
  gqlClientRequestSpy = jest.spyOn(gqlClient, 'request');
});

describe('Articles', () => {
  it('データ取得成功', async () => {
    act(() => {
      gqlClientRequestSpy.mockImplementation(() =>
        Promise.resolve(dummyArticles)
      );
    });

    testRender(<Articles />);

    expect(
      await screen.findByText(
        `title: ${dummyArticles._helloworld_article[0].title}`
      )
    ).toBeInTheDocument();
  });

  it('データ取得失敗', async () => {
    act(() => {
      gqlClientRequestSpy.mockImplementation(() =>
        Promise.reject({ response: errorResponse })
      );
    });

    testRender(<Articles />);

    expect(await screen.findByText(errorResponse.error)).toBeInTheDocument();
  });
});
