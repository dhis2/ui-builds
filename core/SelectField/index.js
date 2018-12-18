import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import _Array$isArray from "@babel/runtime-corejs2/core-js/array/is-array";
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Menu from '../Menu';
import { Help } from '../helpers';
import { isPointInRect } from '../../utils';
import s from './styles';
var statusToIcon = {
  valid: 'check_circle',
  warning: 'warning',
  error: 'error'
};

function markActive(list, value) {
  if (!value) {
    return list;
  }

  return list.slice(0).map(function (item) {
    item.active = item.value && item.value === value;

    if (_Array$isArray(item.list)) {
      item.list = markActive(item.list, value);
    }

    return item;
  });
}

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false,
      labelWidth: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && _this.elMenu) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var menu = _this.elMenu.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!isPointInRect(target, menu) && !isPointInRect(target, container)) {
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

    _this.labelRef = React.createRef();
    return _this;
  }

  _createClass(SelectField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
      this.setState({
        labelWidth: this.labelRef.current.offsetWidth
      });
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
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "shrink",
    value: function shrink() {
      return !!(this.isFocused() || this.props.value || this.props.placeholder);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
          _s2,
          _s3,
          _s4;

      var legendWidth = this.shrink() ? {
        width: "".concat(this.state.labelWidth, "px")
      } : {
        width: 0
      };
      var open = this.state.open;
      var width = 'inherit';

      if (open && this.elSelect) {
        width = "".concat(this.elSelect.getBoundingClientRect().width, "px");
      }

      var selected = this.getLabel();
      var list = markActive(this.props.list, this.props.value);
      return React.createElement("div", {
        ref: function ref(c) {
          return _this3.elContainer = c;
        },
        className: s('reset', 'base', _defineProperty({
          selected: !!this.props.value,
          disabled: this.props.disabled
        }, "size-".concat(this.props.size), true))
      }, React.createElement("div", {
        ref: function ref(c) {
          return _this3.elSelect = c;
        },
        className: s('reset', 'select', (_s2 = {}, _defineProperty(_s2, "kind-".concat(this.props.kind), true), _defineProperty(_s2, "status-".concat(this.props.status), true), _defineProperty(_s2, "disabled", this.props.disabled), _s2)),
        onClick: this.onToggle
      }, React.createElement("label", {
        ref: this.labelRef,
        className: s('reset', 'label', (_s3 = {}, _defineProperty(_s3, "".concat(this.props.status), true), _defineProperty(_s3, "".concat(this.props.size), true), _defineProperty(_s3, "".concat(this.props.kind), true), _defineProperty(_s3, 'has-icon', !!this.props.icon), _defineProperty(_s3, "required", this.props.required), _defineProperty(_s3, "disabled", this.props.disabled), _defineProperty(_s3, "focused", this.isFocused()), _defineProperty(_s3, "shrink", !!selected), _s3))
      }, this.props.label), this.props.kind === 'outlined' && React.createElement("fieldset", {
        className: s('reset', 'outline', (_s4 = {}, _defineProperty(_s4, "".concat(this.props.status), true), _defineProperty(_s4, "focused", this.isFocused()), _defineProperty(_s4, "idle", !this.isFocused()), _defineProperty(_s4, "filled", this.state.text), _s4))
      }, React.createElement("legend", {
        className: s('reset'),
        style: legendWidth
      }, "\xA0")), this.props.icon && React.createElement("div", {
        className: s('reset', 'lead-icon-field')
      }, React.createElement(Icon, {
        name: this.props.icon,
        className: s('icon')
      })), React.createElement("div", {
        className: s('reset', 'input-field', {
          disabled: this.props.disabled
        })
      }, React.createElement("div", {
        className: s('reset', 'value')
      }, selected)), React.createElement("div", {
        className: s('reset', 'trail-icon-field')
      }, this.props.status !== 'default' && React.createElement(Icon, {
        name: statusToIcon[this.props.status],
        className: s('icon', _defineProperty({}, "icon-".concat(this.props.status), true))
      })), React.createElement("div", {
        className: s('reset', 'trail-icon-field', {
          disabled: this.props.disabled
        })
      }, React.createElement(Icon, {
        name: open ? 'arrow_drop_up' : 'arrow_drop_down',
        className: s('icon', {
          disabled: this.props.disabled
        })
      }))), this.props.help && React.createElement(Help, {
        text: this.props.help,
        status: this.props.status
      }), open && React.createElement("div", {
        className: s('reset', 'menu'),
        ref: function ref(c) {
          return _this3.elMenu = c;
        }
      }, React.createElement(Menu, {
        list: list,
        size: this.props.size,
        onClick: this.onClick
      })));
    }
  }]);

  return SelectField;
}(React.Component);

SelectField.defaultProps = {
  disabled: false,
  label: '',
  size: 'default',
  status: 'default'
};
SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  })),
  icon: PropTypes.string,
  help: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'dense']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  onChange: PropTypes.func.isRequired
};
export { SelectField };
export default SelectField;