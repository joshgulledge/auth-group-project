const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM "item"
  `;

  pool.query(queryText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((error) => {
      console.log('error getting shelf', error);
      res.sendStatus(500);
    })

});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality

  let queryText = `
    DELETE FROM "item"
    WHERE id = $1;
  `;
  let queryParams = [req.params.id];

  console.log('queryParams', queryParams)

  pool.query(queryText, queryParams)
    .then(dbRes => {
      console.log('deleted book');
      res.sendStatus(200);

    })
    .catch(err => {
      console.log('error in router.delete', err);
      res.sendStatus(500);
    }) 
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
