import axios from 'axios';

export const fetchCollection = async <T>(url: string, setState: (data: T[]) => void) => {
  const result = await axios.get(url);
  const persistenceData: T[] = result?.data;
  if (persistenceData) setState(persistenceData);
};
