'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import RaisedButton from 'material-ui/lib/raised-button'
// import Avatar from 'material-ui/lib/avatar'


var styles = {
  addInventory: {
    top: 24,
    fontSize: 30,
    color: 'rgb(17, 63, 140)'
  }
};

var LowInventoryItem = function (_React$Component) {
  _inherits(LowInventoryItem, _React$Component);

  function LowInventoryItem() {
    _classCallCheck(this, LowInventoryItem);

    return _possibleConstructorReturn(this, (LowInventoryItem.__proto__ || Object.getPrototypeOf(LowInventoryItem)).apply(this, arguments));
  }

  _createClass(LowInventoryItem, [{
    key: 'onClickReorder',
    value: function onClickReorder() {
      this.props.onClickReorder(this.props.Article, this.props.ArticleName);
    }
  }, {
    key: 'render',
    value: function render() {
      var primaryText = _react2.default.createElement(
        'p',
        { style: { fontSize: 20, fontWeight: 300 } },
        this.props.index + this.props.ArticleName
      );
      var secondaryText = _react2.default.createElement(
        'p',
        { style: { fontSize: 18, fontWeight: 500 } },
        'Current Stock: ' + this.props.CurrentStock,
        this.props.CurrentStock < 10 ? _react2.default.createElement(
          'span',
          { style: { color: '#7CB342', marginLeft: 10, fontWeight: 300 } },
          'Low Stock'
        ) : null
      );

      return _react2.default.createElement(_materialUi.ListItem, {
        style: { paddingTop: 6, paddingBottom: 6, paddingRight: 10, marginLeft: 20, textAlign: 'left' },
        primaryText: primaryText,
        secondaryText: secondaryText,
        rightIcon: _react2.default.createElement(
          _materialUi.FontIcon,
          {
            className: 'material-icons',
            onClick: this.onClickReorder.bind(this),
            style: styles.addInventory
          },
          'add_circle_outline'
        )
      });
    }
  }]);

  return LowInventoryItem;
}(_react2.default.Component);

exports.default = LowInventoryItem;