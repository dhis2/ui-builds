"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LabelField = exports.bem = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../utils");

var _Icon = _interopRequireDefault(require("../../../Icon"));

var _Field = _interopRequireDefault(require("../Field"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bem = (0, _utils.bemClassNames)('label-field');
exports.bem = bem;

var computeTrailingIcon = function computeTrailingIcon(trailingIcon, error, warning, valid) {
  switch (true) {
    case Boolean(trailingIcon):
      return trailingIcon;

    case error:
      return 'error';

    case warning:
      return 'warning';

    case valid:
      return 'check_circle';

    default:
      return null;
  }
};

var LabelField = function LabelField(_ref) {
  var variant = _ref.variant,
      dense = _ref.dense,
      label = _ref.label,
      value = _ref.value,
      leadingIcon = _ref.leadingIcon,
      trailingIcon = _ref.trailingIcon,
      error = _ref.error,
      valid = _ref.valid,
      warning = _ref.warning,
      disabled = _ref.disabled,
      children = _ref.children,
      multiline = _ref.multiline,
      block = _ref.block,
      required = _ref.required,
      helpText = _ref.helpText;
  var computedTrailingIcon = computeTrailingIcon(trailingIcon, error, warning, valid);
  var focusIndicator = variant === 'outlined' ? 'notched-outline' : 'bottom-line';
  var wrapperClassName = bem.b(variant, {
    'with-value': value !== '',
    'with-trailing-icon': computedTrailingIcon,
    'with-leading-icon': leadingIcon,
    'full-width': block,
    dense: dense,
    error: error,
    valid: valid,
    warning: warning,
    disabled: disabled,
    multiline: multiline
  });
  return _react.default.createElement(_Field.default, {
    valid: valid,
    warning: warning,
    disabled: disabled,
    error: error,
    dense: dense,
    block: block,
    helpText: helpText
  }, _react.default.createElement("label", {
    className: wrapperClassName
  }, children, _react.default.createElement("span", {
    className: bem.e(focusIndicator)
  }), leadingIcon && _react.default.createElement(_Icon.default, {
    name: leadingIcon,
    className: bem.e('icon', 'leading')
  }), computedTrailingIcon && _react.default.createElement(_Icon.default, {
    name: computedTrailingIcon,
    className: bem.e('icon', 'trailing')
  }), _react.default.createElement("span", {
    className: bem.e('floating')
  }, (0, _utils.getRequiredText)(label, required))));
};

exports.LabelField = LabelField;
LabelField.defaultProps = {
  value: '',
  dense: false,
  variant: 'filled'
};
var _default = LabelField;
exports.default = _default;