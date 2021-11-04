export const GetArticlesQuery = `
  query GetArticlesQuery {
    _helloworld_article {
      id
      title
      rating
      author {
        id
        name
      }
    }
  }
`;

export const GetAuthorsQuery = `
  query GetAuthorsQuery {
    _helloworld_author {
      id
      name
      articles {
        id
        title
        rating
        created_at
      }
    }
  }
`;
