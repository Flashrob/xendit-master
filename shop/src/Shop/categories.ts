import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(
    function fetchCategories() {
      const fetchData = async () => {
        const result = await axios.get('http://localhost:3000/categories');
        if (result.data) setCategories(result.data);
      };
      if (!categories.length) fetchData();
    },
    [categories.length],
  );

  return categories;
};
