"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _css = _interopRequireDefault(require("../../../utils/css"));

var _styles = _interopRequireDefault(require("./styles.json"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var _default = (0, _css.default)(_styles.default);

exports.default = _default;