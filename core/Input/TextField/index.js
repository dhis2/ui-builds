"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = TextField;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LabelField = _interopRequireWildcard(require("../shared/LabelField"));

var _utils = require("../../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function TextField(_ref) {
  var variant = _ref.variant,
      type = _ref.type,
      dense = _ref.dense,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      leadingIcon = _ref.leadingIcon,
      trailingIcon = _ref.trailingIcon,
      error = _ref.error,
      valid = _ref.valid,
      warning = _ref.warning,
      disabled = _ref.disabled,
      block = _ref.block,
      multiline = _ref.multiline,
      required = _ref.required,
      helpText = _ref.helpText;
  var InputTag = multiline ? 'textarea' : 'input';
  return _react.default.createElement(_LabelField.default, {
    variant: variant,
    dense: dense,
    label: label,
    value: value,
    leadingIcon: leadingIcon,
    trailingIcon: trailingIcon,
    error: error,
    valid: valid,
    warning: warning,
    disabled: disabled,
    block: block,
    multiline: multiline,
    required: required,
    helpText: helpText
  }, _react.default.createElement(InputTag, {
    className: _LabelField.bem.e('input'),
    value: value,
    onChange: onChange,
    type: type,
    disabled: disabled
  }));
}

TextField.defaultProps = {
  value: '',
  dense: false,
  variant: 'filled',
  type: 'text'
};
var _default = TextField;
exports.default = _default;