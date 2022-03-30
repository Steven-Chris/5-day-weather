"use strict";
const constantConfig = require("../../config/constantConfig");
const axios = require("axios");

module.exports.getWeather = async (req, res) => {
  const api_key = process.env.API_KEY;
  try {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=18.6298&lon=73.7997&appid=${api_key}&units=metric`
    );
    res.status(constantConfig.SUCCESS_CODE).json({
      status: constantConfig.SUCCESS,
      message: `Here is your weather`,
      data: data?.data,
    });
  } catch (err) {
    console.log(`err`, err);
    return res.status(constantConfig.INTERNAL_SERVER_ERROR).json({
      status: constantConfig.ERROR,
      message: constantConfig.SOMETHING_WENT_WRONG,
    });
  }
};
