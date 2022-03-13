import { useState, useEffect } from 'react';
import { Category } from '../common/models/Category';
import { fetchCollection } from '../common/helpers/fetchData';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(
    function fetchCategories() {
      if (!categories.length)
        fetchCollection('http://localhost:3000/categories', setCategories);
    },
    [categories.length],
  );

  return categories;
};

export const makeCategoryDropdownOptions = (categories: Category[]) => {
  if (!categories.length) return [];
  return categories.map((category) => (
    <option value={category.id} key={category.name}>
      {category.name}
    </option>
  ));
};
