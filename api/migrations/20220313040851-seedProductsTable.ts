import * as Sequelize from 'sequelize';

const productsData = [
  { category: 'computers', name: 'Asus laptop', price: 500 },
  { category: 'computers', name: 'Acer desktop', price: 400 },
  { category: 'computers', name: 'macbook pro', price: 3000 },
  { category: 'computers', name: 'Xiaomi notebook', price: 500 },
  { category: 'phones', name: 'Samsung Galaxy S500', price: 1500 },
  { category: 'phones', name: 'iPhone XYZ', price: 2000 },
  { category: 'phones', name: 'Xiaomi T10', price: 800 },
  { category: 'phones', name: 'Huawei X50', price: 900 },
  { category: 'tvs', name: 'Samsung Flatscreen', price: 350 },
  { category: 'tvs', name: 'LG Curved 50"', price: 1300 },
  { category: 'tvs', name: 'Sony Super 100"', price: 2499 },
  { category: 'tvs', name: 'Prism+ 70"', price: 2000 },
  { category: 'accessories', name: 'iPhone XYZ Screen protector', price: 20 },
  { category: 'accessories', name: 'HDMI cable', price: 10 },
  { category: 'accessories', name: 'USB to USB-Mini cable', price: 5 },
  { category: 'accessories', name: 'Apple keychain', price: 4 },
  { category: 'gaming', name: 'PlayStation 7', price: 499 },
  { category: 'gaming', name: 'PlayStation 5 (delayed)', price: 199 },
  { category: 'gaming', name: 'Mario Kart 75', price: 80 },
  { category: 'gaming', name: 'Pokemon Alpha', price: 99 },
];

export const up = async (sequelize: Sequelize.Sequelize) => {
  console.log('Migrating...');

  for (const { name, price, category } of productsData) {
    const [persistenceCategory]: { id: number; name: string }[] =
      // eslint-disable-next-line no-await-in-loop
      await sequelize.query(
        `SELECT * FROM "Categories" WHERE "name" = $category LIMIT 1`,
        { bind: { category }, type: Sequelize.QueryTypes.SELECT },
      );

    if (persistenceCategory) {
      const { id: CategoryId } = persistenceCategory;

      // eslint-disable-next-line no-await-in-loop
      await sequelize.query(
        `
      INSERT INTO "Products" ("name", "price", "CategoryId") VALUES ($name, $price, $CategoryId)`,
        {
          bind: { name, price, CategoryId },
          type: Sequelize.QueryTypes.INSERT,
        },
      );
    }
  }

  console.log('Done migrating!');
};

export const down = async (sequelize: Sequelize.Sequelize) => {
  console.log('Rolling back...');

  await sequelize.query(`DELETE FROM "Products"`);

  console.log('Done rolling back!');
};
