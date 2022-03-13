import { useEffect, useState } from 'react';
import { makeCategoryDropdownOptions, useCategories } from './categories';
import { useProducts } from './products';
import { Container, Headline, Title, Paragraph, Select } from './Shop.sc';

export const Shop = () => {
  const categories = useCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(
    categories[0]?.id,
  );

  const { products, fetch: refetch } = useProducts(selectedCategoryId);

  const categoryOptions = makeCategoryDropdownOptions(categories);

  useEffect(
    function setInitialCategory() {
      if (categories.length && !selectedCategoryId) {
        setSelectedCategoryId(categories[0].id);
      }
    },
    [categories, selectedCategoryId, refetch],
  );

  useEffect(
    function refetchProductsOnCategoryChange() {
      refetch();
    },
    [selectedCategoryId, refetch],
  );

  if (!categories.length || !products)
    return (
      <Container>
        <Headline>
          <Title>XenElectronic Shop</Title>
          <Paragraph>Loading...</Paragraph>
        </Headline>
      </Container>
    );

  return (
    <Container>
      <Headline>
        <Title>XenElectronic Shop</Title>
        <Paragraph>Please select a product category</Paragraph>
      </Headline>
      <Select
        defaultValue={selectedCategoryId}
        onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
      >
        {categoryOptions}
      </Select>
      {products && products.map((product) => <p>{product.name}</p>)}
    </Container>
  );
};
