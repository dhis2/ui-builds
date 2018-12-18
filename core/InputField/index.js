import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import s from './styles';
import { Help } from '../helpers';
var statusToIcon = {
  valid: 'check_circle',
  warning: 'warning',
  error: 'error'
};

function icon(i) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (i) {
    return React.createElement("div", null, React.createElement(Icon, {
      name: i,
      onClick: action,
      className: s('icon', extra)
    }));
  }

  return null;
}

function trailIcon(status, trail) {
  if (status !== 'default') {
    return icon(statusToIcon[status], null, "icon-".concat(status));
  } else {
    return icon(trail);
  }
}

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false,
      text: _this.props.value,
      labelWidth: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (evt) {
      _this.setState({
        focused: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (evt) {
      _this.setState({
        focused: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (evt) {
      if (_this.props.disabled) {
        return;
      }

      _this.props.onChange(_this.props.name, evt.target.value);

      _this.setState({
        text: evt.target.value
      });
    });

    _this.labelRef = React.createRef();
    return _this;
  }

  _createClass(InputField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        labelWidth: this.labelRef.current.offsetWidth
      });
    }
  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "shrink",
    value: function shrink() {
      return !!(this.isFocused() || this.state.text || this.props.placeholder);
    }
  }, {
    key: "render",
    value: function render() {
      var _s, _s2, _s3;

      var legendWidth = this.shrink() ? {
        width: "".concat(this.state.labelWidth, "px")
      } : {
        width: 0
      };
      return React.createElement("div", {
        className: s('reset', 'base', {
          focused: this.isFocused(),
          disabled: this.props.disabled
        })
      }, React.createElement("div", {
        className: s('reset', 'field', (_s = {}, _defineProperty(_s, "size-".concat(this.props.size), true), _defineProperty(_s, "status-".concat(this.props.status), true), _defineProperty(_s, "kind-".concat(this.props.kind), true), _defineProperty(_s, "focused", this.isFocused()), _defineProperty(_s, "filled", this.state.text), _defineProperty(_s, "disabled", this.props.disabled), _s))
      }, React.createElement("label", {
        ref: this.labelRef,
        className: s('reset', 'label', (_s2 = {}, _defineProperty(_s2, "".concat(this.props.status), true), _defineProperty(_s2, "".concat(this.props.size), true), _defineProperty(_s2, "".concat(this.props.kind), true), _defineProperty(_s2, 'has-icon', !!this.props.icon), _defineProperty(_s2, "required", this.props.required), _defineProperty(_s2, "disabled", this.props.disabled), _defineProperty(_s2, "focused", this.isFocused()), _defineProperty(_s2, "shrink", this.shrink()), _s2))
      }, this.props.label), this.props.kind === 'outlined' && React.createElement("fieldset", {
        className: s('reset', 'outline', (_s3 = {}, _defineProperty(_s3, "".concat(this.props.status), true), _defineProperty(_s3, "focused", this.isFocused()), _defineProperty(_s3, "idle", !this.isFocused()), _defineProperty(_s3, "filled", this.state.text), _s3))
      }, React.createElement("legend", {
        className: s('reset'),
        style: legendWidth
      }, "\xA0")), icon(this.props.icon), React.createElement("input", {
        className: s('reset', 'input', {
          disabled: this.props.disabled
        }),
        type: this.props.type,
        placeholder: this.props.placeholder,
        disabled: this.props.disabled,
        value: this.state.text,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      }), trailIcon(this.props.status, this.props.trailIcon)), this.props.help && React.createElement(Help, {
        text: this.props.help,
        status: this.props.status
      }));
    }
  }]);

  return InputField;
}(React.Component);

InputField.defaultProps = {
  disabled: false,
  label: '',
  status: 'default',
  size: 'default',
  kind: 'filled'
};
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  trailIcon: PropTypes.string,
  help: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'dense']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error'])
};
export { InputField };
export default InputField;