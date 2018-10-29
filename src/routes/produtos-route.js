'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto-controller');

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/:slug', controller.getBySlug);
router.get('/:tags/:tag', controller.getByTag);
router.get('/admin/:id', controller.getById);

module.exports = router;