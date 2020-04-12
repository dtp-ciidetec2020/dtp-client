import Axios, { Method } from 'axios';

const urlDomain = 'https://jsonplaceholder.typicode.com/';

type RequestType = {
  api: string;
  method: Method;
  body?: any; // define all body types
  headers?: any; // define headers
  callback?: any; // handle the data
};

const getMethod = (method: string) => {
  const { get, post, put, delete: remove } = Axios;

  switch (method) {
    case 'get':
      return get;
    case 'post':
      return post;
    case 'delete':
      return remove;
    case 'put':
      return put;
    default:
      return get;
  }
};

export const Caller = async (request: RequestType) => {
  const { api, body, headers, method, callback } = request;
  const requestedMethod = getMethod(method);
  try {
    const data = await requestedMethod(`${urlDomain}${api}`);

    callback(data);
  } catch (error) {
    console.log(error);
  }
};
