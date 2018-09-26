"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Popover = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _utils = require("../../utils");

var _computePosition = _interopRequireDefault(require("./computePosition"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bem = (0, _utils.bemClassNames)('popover');

var Popover =
/*#__PURE__*/
function (_Component) {
  _inherits(Popover, _Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      style: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "elContainer", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRender", function (ref) {
      _this.elContainer = ref;

      _this.adjustPosition();
    });

    return _this;
  }

  _createClass(Popover, [{
    key: "adjustPosition",
    value: function adjustPosition() {
      var _this$props = this.props,
          getAnchorRef = _this$props.getAnchorRef,
          anchorAttachPoint = _this$props.anchorAttachPoint,
          popoverAttachPoint = _this$props.popoverAttachPoint;

      var anchorEl = _reactDom.default.findDOMNode(getAnchorRef());

      if (anchorEl && this.elContainer) {
        this.setState({
          style: (0, _computePosition.default)(this.elContainer, anchorEl, anchorAttachPoint, popoverAttachPoint)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.open) {
        return null;
      }

      var _this$props2 = this.props,
          closePopover = _this$props2.closePopover,
          appearAnimation = _this$props2.appearAnimation;
      return _reactDom.default.createPortal(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: bem.e('overlay'),
        onClick: closePopover
      }), _react.default.createElement("div", {
        ref: this.onRender,
        className: bem.b(appearAnimation),
        style: this.state.style
      }, this.props.children)), document.body);
    }
  }]);

  return Popover;
}(_react.Component);

exports.Popover = Popover;
Popover.defaultProps = {
  anchorAttachPoint: {
    vertical: 'middle',
    horizontal: 'center'
  },
  popoverAttachPoint: {
    vertical: 'middle',
    horizontal: 'center'
  },
  appearAnimation: 'fade-in'
};
var _default = Popover;
exports.default = _default;