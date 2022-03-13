import { useState, useEffect } from 'react';
import axios from 'axios';
import { Category } from '../common/models/Category';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(
    function fetchCategories() {
      const fetchData = async () => {
        const result = await axios.get('http://localhost:3000/categories');
        const persistenceCategories: Category[] = result?.data;
        if (persistenceCategories) setCategories(persistenceCategories);
      };
      if (!categories.length) fetchData();
    },
    [categories.length],
  );

  return categories;
};
