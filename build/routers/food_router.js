"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _foodcotroller = require("../controllers/foodcotroller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var foodsrouter = _express["default"].Router();
foodsrouter.get("/joongu", _foodcotroller.getjoongufoods);
var _default = foodsrouter;
exports["default"] = _default;