"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAnimatedClose = withAnimatedClose;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This HOC adds a "isAnimatingOut" (bool) and "onAnimationEnd" (fn) property
 * to a wrapped component. The "isAnimatingOut" can be used to add a CSS class
 * based keyframe animation to hide a component before it is removed from the DOM.
 * This HOC makes quite a few assumptions about the wrapped component, so won't be
 * suitable for any given situation:
 * 1. It has an "open" property which is used to toggle visiblity.
 * 2. It renders content if `open || isAnimatingOut` is true
 * 3. It adds some CSS class to an element if isAnimatingOut is true.
 * 4. This CSS class has a keyframe animation attached to it
 * 5. The animated element to wait for has an "onAnimationEnd" property with the
 *    callback from the HOC
 */
function withAnimatedClose(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AnimatedClose, _React$Component);

      function AnimatedClose() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, AnimatedClose);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AnimatedClose)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          isAnimatingOut: false
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAnimationStart", function () {
          return _this.setState({
            isAnimatingOut: true
          });
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAnimationEnd", function () {
          return _this.setState({
            isAnimatingOut: false
          });
        });

        return _this;
      }

      _createClass(AnimatedClose, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          if (!nextProps.open && this.props.open && !this.state.isAnimatingOut) {
            this.onAnimationStart();
            return false;
          }

          return true;
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(WrappedComponent, _extends({}, this.props, {
            isAnimatingOut: this.state.isAnimatingOut,
            onAnimationEnd: this.onAnimationEnd
          }));
        }
      }]);

      return AnimatedClose;
    }(_react.default.Component)
  );
}