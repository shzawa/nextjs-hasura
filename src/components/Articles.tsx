import useSWR from 'swr';
import { gqlClient } from '../api/client';
import { GetArticlesQuery } from '../api/query';
import { GqlServerArticles } from '../api/types';
import type { ErrorReponseType } from '../api/type';

export function Articles() {
  const { data, error } = useSWR<GqlServerArticles>(
    [GetArticlesQuery],
    (query) => gqlClient.request(query)
  );

  if (error) {
    const { response }: { response: ErrorReponseType } = error;

    return <p>{response.error}</p>;
  }
  if (!data) {
    return <p>loading...</p>;
  }

  const { _helloworld_article: articles } = data;

  return (
    <>
      {articles.length === 0 ? (
        <p>no article</p>
      ) : (
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.id}>
                <p>title: {article.title}</p>
                <p>author: {article.author ? article.author.name : ''}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
