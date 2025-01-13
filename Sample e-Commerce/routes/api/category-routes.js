const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  // find all categories
  //select * from category;
  // be sure to include its associated Products
  try {
    const categoryData = await  Category.findAll({
      include:[{model: Product}]
    });
    res.status(200).json( categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//http://localhost:3001/api/categories/1
router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryData = await  Category.findByPk( 
      req.params.id,
      {
      include:[{model: Product}]
      }
  );
    res.status(200).json( categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/categories/
router.post('/', async (req, res) => {
  // create a new category
  try {
    
    const categoryData = await  Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json( categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/categories/1
router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await  Category.update( 
      {
        category_name:req.body.category_name    
      },
      {
        where:{
          id:req.params.id
        }
      }
  );
    res.status(200).json( categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

//http://localhost:3001/api/categories/1
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await  Category.destroy( 
      {
        where:{
          id:req.params.id
        }
      }
  );
    res.status(200).json( categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
