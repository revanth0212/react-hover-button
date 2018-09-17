'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultRootNodeStyle = { display: 'flex' };

var defaultOptionsStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' };

var Option = function Option(_ref) {
  var option = _ref.option,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { style: style },
    option.node
  );
};

var Options = function Options(_ref2) {
  var options = _ref2.options,
      _ref2$style = _ref2.style,
      style = _ref2$style === undefined ? defaultOptionsStyle : _ref2$style,
      optionStyle = _ref2.optionStyle;
  return _react2.default.createElement(
    'div',
    { style: style },
    options.map(function (option) {
      return _react2.default.createElement(Option, { option: option, style: optionStyle });
    })
  );
};

var HoverButton = function (_React$Component) {
  _inherits(HoverButton, _React$Component);

  function HoverButton(props) {
    _classCallCheck(this, HoverButton);

    var _this = _possibleConstructorReturn(this, (HoverButton.__proto__ || Object.getPrototypeOf(HoverButton)).call(this, props));

    _this.setComponentState = function (newState) {
      console.log(newState);
      _this.setState(newState);
    };

    _this.onClick = function () {
      _this.setComponentState({
        showOptions: !_this.state.showOptions
      });
    };

    _this.state = {
      showOptions: props.showOptions
    };
    return _this;
  }

  _createClass(HoverButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          node = _props.node,
          options = _props.options,
          rootStyle = _props.rootStyle,
          optionsStyle = _props.optionsStyle,
          optionStyle = _props.optionStyle;
      var showOptions = this.state.showOptions;

      return _react2.default.createElement(
        'div',
        { style: _extends({ width: 'fit-content' }, rootStyle) },
        _react2.default.createElement(
          'div',
          { onClick: this.onClick, style: defaultRootNodeStyle },
          node
        ),
        showOptions && _react2.default.createElement(Options, { options: options, optionStyle: optionStyle, style: optionsStyle })
      );
    }
  }]);

  return HoverButton;
}(_react2.default.Component);

HoverButton.defaultProps = {
  showOptions: false
};
exports.default = HoverButton;