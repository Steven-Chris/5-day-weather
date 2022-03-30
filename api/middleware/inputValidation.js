const { body } = require("express-validator");

// PRODUCT VALIDATION
module.exports.productValidate = () => {
  return [
    body("name")
      .exists()
      .withMessage("Product Name is required.")
      .notEmpty()
      .withMessage("Product Name is required.")
      .trim()
      .isLength({ max: 50 })
      .withMessage("Full Name length can't be more than 50."),

    body("category")
      .exists()
      .withMessage("Category is required.")
      .notEmpty()
      .withMessage("Category is required.")
      .trim()
      .isLength({ max: 320 })
      .withMessage("Category length can't be more than 100."),

    body("price")
      .exists()
      .withMessage("Price is required.")
      .notEmpty()
      .withMessage("Price is required.")
      .trim()
      .isLength({ max: 15 })
      .withMessage("Price length can't be more than 15."),

    body("user_id")
      .exists()
      .withMessage("User ID is required.")
      .notEmpty()
      .withMessage("User ID is required.")
      .trim()
      .isLength({ max: 150 })
      .withMessage("User ID length can't be more than 150."),
  ];
};
