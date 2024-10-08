const pool=require('./db');
const queries=require('./queries');


// Function to retrieve all product list of a company as per the product's available units
const getAllProductsForCompany = (req, res) => {
    const companyId = parseInt(req.params.cmpId);
    pool.query(queries.getAllProductsForCompany, [companyId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Function to retrieve product name, original price, price after discount for a given company
const getProductDetailsForCompany = (req, res) => {
    const companyId = parseInt(req.params.cmpId);
    pool.query(queries.getProductDetailsForCompany, [companyId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Function to retrieve name of the products with discount more than average discount for a given company
const getProductsAboveAvgDiscount = (req, res) => {
    const companyId = parseInt(req.params.cmpId);
    pool.query(queries.getProductsAboveAvgDiscount, [companyId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Function to retrieve all company details who are providing the most discounts on all products in ascending order
const getCompaniesWithMostDiscounts = (req, res) => {
    pool.query(queries.getCompaniesWithMostDiscounts, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Exporting all the functions
module.exports = {
    getAllProductsForCompany,
    getProductDetailsForCompany,
    getProductsAboveAvgDiscount,
    getCompaniesWithMostDiscounts,
};
