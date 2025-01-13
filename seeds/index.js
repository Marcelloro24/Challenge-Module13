const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

// Function to seed all data
const seedAll = async () => {
  // Sync database and force true to drop tables if they exist
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Seed categories first
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // Seed products
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // Seed tags
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // Seed product tags
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll(); 