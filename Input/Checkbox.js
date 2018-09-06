"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./checkbox.css");

require("./togglerwrap.css");

var _utils = require("../utils");

var _ToggleField = _interopRequireDefault(require("../../build/Input/ToggleField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bem = (0, _utils.bemClassNames)('d2ui-checkbox');

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onChange = _ref.onChange;
  return _react.default.createElement(_ToggleField.default, {
    disabled: disabled
  }, _react.default.createElement("div", {
    className: bem.b({
      disabled: disabled
    })
  }, _react.default.createElement("input", {
    type: "checkbox",
    className: bem.e('native-control'),
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }), _react.default.createElement("div", {
    className: bem.e('background')
  }, _react.default.createElement("svg", {
    className: bem.e('checkmark'),
    viewBox: "0 0 24 24"
  }, _react.default.createElement("path", {
    className: bem.e('checkmark-path'),
    fill: "none",
    d: "M1.73,12.91 8.1,19.28 22.79,4.59"
  })), _react.default.createElement("div", {
    className: bem.e('mixedmark')
  }))), _react.default.createElement("span", {
    className: bem.e('label-text', {
      disabled: disabled
    })
  }, label));
};

Checkbox.defaultProps = {
  value: false,
  disabled: false
};
var _default = Checkbox;
exports.default = _default;