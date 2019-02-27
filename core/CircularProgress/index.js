"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgress = CircularProgress;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Circle() {
  return _react.default.createElement("svg", {
    viewBox: "22 22 44 44"
  }, _react.default.createElement("circle", {
    className: (0, _classnames.default)('circle'),
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6"
  }));
}

var _ref2 =
/*#__PURE__*/
_react.default.createElement(Circle, null);

function CircularProgress(_ref) {
  var size = _ref.size,
      overlay = _ref.overlay;

  var loader = _react.default.createElement("div", {
    role: "progressbar",
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', size) || "")
  }, _ref2, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));

  if (overlay) {
    return _react.default.createElement("div", {
      className: (0, _classnames.default)('overlay')
    }, loader);
  }

  return loader;
}

CircularProgress.defaultProps = {
  overlay: false,
  size: 'medium'
};
CircularProgress.propTypes = {
  overlay: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'medium', 'large'])
};
var _default = CircularProgress;
exports.default = _default;