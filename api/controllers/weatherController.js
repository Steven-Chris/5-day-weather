"use strict";
const constantConfig = require("../../config/constantConfig");
const { handleError } = require("../lib/errorHandling");
const Product = require("../../models/productModel");

module.exports.getWeather = async (req, res) => {
  try {
    res.status(constantConfig.SUCCESS_CODE).json({
      status: constantConfig.SUCCESS,
      message: `Here is your weather`,
    });
  } catch (err) {
    console.log(`err`, err);
    return res.status(constantConfig.INTERNAL_SERVER_ERROR).json({
      status: constantConfig.ERROR,
      message: constantConfig.SOMETHING_WENT_WRONG,
    });
  }
};
