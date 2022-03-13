import { useState, useEffect, useCallback } from 'react';
import { Product } from '../common/models/Product';
import { fetchCollection } from '../common/helpers/fetchData';

export const useProducts = (CategoryId: number) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetch = useCallback(() => {
    if (CategoryId)
      fetchCollection(
        `http://localhost:3000/products/${CategoryId}`,
        setProducts,
      );
  }, [CategoryId]);

  useEffect(
    function fetchProductsByCategoryId() {
      if (!products.length && CategoryId) fetch();
    },
    [products.length, CategoryId, fetch],
  );

  return { products, fetch };
};
