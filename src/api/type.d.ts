export type ErrorReponseType = {
  path: string;
  error: string;
  code: Response['statusText'];
  status: Response['status'];
  headers: {
    map: {
      'content-type': string;
    };
  };
};
