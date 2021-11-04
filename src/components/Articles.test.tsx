import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { GqlServerArticles } from '~/api/types';
import { Articles } from './Articles';
import { gqlClient } from '~/api/client';
import { SWRConfig } from 'swr';

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

let gqlClientRequestSpy: jest.SpyInstance<unknown>;

const testRender = (children: React.ReactNode) =>
  render(<SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>);

describe('Articles', () => {
  beforeEach(() => {
    gqlClientRequestSpy = jest.spyOn(gqlClient, 'request');
  });

  it('データ取得成功', async () => {
    gqlClientRequestSpy.mockImplementation(() =>
      Promise.resolve(dummyArticles)
    );

    await act(async () => {
      testRender(<Articles />);
    });

    expect(gqlClientRequestSpy).toHaveBeenCalled();

    // screen.debug();
  });
});
