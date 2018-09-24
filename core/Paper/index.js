"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Paper = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../utils/index");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _index.bemClassNames)('paper');

var Paper = function Paper(_ref) {
  var elevation = _ref.elevation,
      children = _ref.children,
      padded = _ref.padded;
  return _react.default.createElement("div", {
    className: bem.b("elevation-".concat(elevation, "dp"), {
      padded: padded
    })
  }, children);
};

exports.Paper = Paper;
Paper.defaultProps = {
  elevation: 1,
  padded: false
};
var _default = Paper;
exports.default = _default;