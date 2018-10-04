"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabIndicator = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabIndicator =
/*#__PURE__*/
function (_Component) {
  _inherits(TabIndicator, _Component);

  function TabIndicator(props) {
    var _this;

    _classCallCheck(this, TabIndicator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabIndicator).call(this, props));
    _this.state = {
      animated: false
    };
    return _this;
  }

  _createClass(TabIndicator, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // The tabindicator should not move with a CSS transition when it is first positioned into place
      // The tick after the visibility is true, the animation should start
      if (!prevProps.visible && this.props.visible) {
        this.setState({
          animated: true
        });
      }
    }
  }, {
    key: "getTransformStyle",
    value: function getTransformStyle() {
      var activeTabNode = this.props.getActiveTabRef();

      if (!activeTabNode) {
        return null;
      }

      var translateX = "translateX(".concat(activeTabNode.offsetLeft, "px)");
      var scaleX = "scaleX(".concat(activeTabNode.offsetWidth, ")");
      return {
        transform: "".concat(translateX, " translateY(2px) ").concat(scaleX)
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("span", {
        className: (0, _styles.default)('tab-indicator', {
          visible: this.props.visible,
          animated: this.state.animated
        }),
        style: this.getTransformStyle()
      });
    }
  }]);

  return TabIndicator;
}(_react.Component);

exports.TabIndicator = TabIndicator;
var _default = TabIndicator;
exports.default = _default;