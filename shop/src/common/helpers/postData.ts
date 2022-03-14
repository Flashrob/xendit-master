import axios from 'axios';

export const postData = async <T>(
  url: string,
  payload: Record<string, unknown>,
): Promise<T> => {
  const result = await axios.post(url, payload);
  return result?.data;
};
