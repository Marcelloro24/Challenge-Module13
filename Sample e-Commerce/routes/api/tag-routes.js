const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//http://localhost:3001/api/tags/
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

//http://localhost:3001/api/tags/1
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

//http://localhost:3001/api/tags/
router.post('/', (req, res) => {
  // create a new tag
});

//http://localhost:3001/api/tags/1
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});


//http://localhost:3001/api/tags/1
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
