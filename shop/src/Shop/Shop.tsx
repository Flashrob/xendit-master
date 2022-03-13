import { Category } from '../common/models/Category';
import { useCategories } from './categories';
import { Container, Headline, Title, Paragraph, Select } from './Shop.sc';

const makeCategoryDropdownOptions = (categories: Category[]) => {
  return categories.map((category) => (
    <option value={category.id} key={category.name}>
      {category.name}
    </option>
  ));
};

export const Shop = () => {
  const categories = useCategories();
  if (!categories) return <div>Loading...</div>;

  const categoryOptions = makeCategoryDropdownOptions(categories);
  return (
    <Container>
      <Headline>
        <Title>XenElectronic Shop</Title>
        <Paragraph>Please select a product category</Paragraph>
      </Headline>
      <Select onChange={(e) => console.log(e.target.value)}>
        {categoryOptions}
      </Select>
    </Container>
  );
};
