const { Router } = require("express");
const controller = require('./controller');

const router = Router();

// Your existing routes
// New routes for the specified queries
router.get('/productlist/:cmpId', controller.getAllProductsForCompany);
router.get('/productInfo/:cmpId', controller.getProductDetailsForCompany);
router.get('/:cmpId', controller.getProductsAboveAvgDiscount);
router.get('/', controller.getCompaniesWithMostDiscounts);

module.exports = router;
