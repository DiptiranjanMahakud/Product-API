const { Router } = require("express");
const controller = require('./controller');

const router = Router();

// Your existing routes
// New routes for the specified queries
router.get('/:productId/', controller.getAllProductsForCompany);
router.get('/:detailsId//', controller.getProductDetailsForCompany);
router.get('/:avgId///', controller.getProductsAboveAvgDiscount);
router.get('/', controller.getCompaniesWithMostDiscounts);

module.exports = router;
