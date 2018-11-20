"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectField = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _helpers = require("../helpers");

var _utils = require("../../utils");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function markActive(list, value) {
  if (!value) {
    return list;
  }

  return list.slice(0).map(function (item) {
    item.active = item.value && item.value === value;

    if (Array.isArray(item.list)) {
      item.list = markActive(item.list, value);
    }

    return item;
  });
}

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && _this.elMenu) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var menu = _this.elMenu.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!(0, _utils.isPointInRect)(target, menu) && !(0, _utils.isPointInRect)(target, container)) {
          _this.setState({
            open: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      if (_this.props.disabled) {
        return false;
      }

      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (value) {
      if (_this.props.disabled) {
        return false;
      }

      _this.setState({
        open: false
      });

      _this.props.onChange(_this.props.name, value);
    });

    return _this;
  }

  _createClass(SelectField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      var _this2 = this;

      if (!this.props.value) {
        return false;
      }

      var selected = this.props.list.filter(function (_ref) {
        var value = _ref.value;
        return _this2.props.value === value;
      });
      return selected.length > 0 ? selected[0]['label'] : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
          _s;

      var open = this.state.open;
      var width = 'inherit';

      if (open && this.elSelect) {
        width = "".concat(this.elSelect.getBoundingClientRect().width, "px");
      }

      var selected = this.getLabel();
      var list = markActive(this.props.list, this.props.value);
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elContainer = c;
        },
        className: (0, _styles.default)('container', (_s = {
          selected: !!this.props.value,
          disabled: this.props.disabled
        }, _defineProperty(_s, "kind-".concat(this.props.kind), true), _defineProperty(_s, "size-".concat(this.props.size), true), _s))
      }, _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elSelect = c;
        },
        className: (0, _styles.default)('select'),
        onClick: this.onToggle
      }, this.props.icon && _react.default.createElement("div", {
        className: (0, _styles.default)('icon')
      }, _react.default.createElement(_Icon.default, {
        name: this.props.icon
      })), _react.default.createElement("div", {
        className: (0, _styles.default)('value')
      }, selected), _react.default.createElement(_helpers.Label, {
        type: "select",
        size: this.props.size,
        kind: this.props.kind,
        text: this.props.label,
        status: this.props.status,
        hasIcon: !!this.props.icon,
        disabled: this.props.disabled,
        state: selected ? 'minimized' : 'default'
      }), _react.default.createElement(_Icon.default, {
        name: open ? 'arrow_drop_up' : 'arrow_drop_down',
        className: (0, _styles.default)('dropdown-icon')
      })), this.props.help && _react.default.createElement(_helpers.Help, {
        text: this.props.help,
        status: this.props.status
      }), open && _react.default.createElement("div", {
        className: (0, _styles.default)('menu'),
        ref: function ref(c) {
          return _this3.elMenu = c;
        }
      }, _react.default.createElement(_Menu.default, {
        list: list,
        size: this.props.size,
        onClick: this.onClick
      })));
    }
  }]);

  return SelectField;
}(_react.default.Component);

exports.SelectField = SelectField;
SelectField.defaultProps = {
  disabled: false,
  label: '',
  size: 'default'
};
SelectField.propTypes = {
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
  })),
  icon: _propTypes.default.string,
  help: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['default', 'dense']),
  kind: _propTypes.default.oneOf(['filled', 'outlined']),
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error']),
  onChange: _propTypes.default.func.isRequired
};
var _default = SelectField;
exports.default = _default;