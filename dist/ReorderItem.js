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

var styles = {
  container: {
    zIndex: 10
  },
  cardTitle: {
    // padding: 24,
    // paddingTop: 16,
  },
  incentiveContainer: {
    padding: 24,
    paddingTop: 4
  },
  trophy: {
    height: 30,
    widht: 30
  },
  incentiveCircle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: 180,
    height: 180,
    borderRadius: '50%',
    backgroundColor: '#FFA00C'
  },
  points: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  pointsTotal: {
    color: 'white'
  },
  receiptContainer: {
    backgroundColor: 'white',
    fontSize: 13,
    padding: 8,
    border: '1px solid lightgrey',
    width: 160,
    textAlign: 'center',
    marginTop: -30,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  receipt: {
    paddingBottom: 8,
    borderBottom: '1px solid lightgrey',
    marginBottom: 8
  },
  receiptLabel: {
    color: 'gray',
    marginRight: 8,
    fontSize: 12
  },
  action: {
    textAlign: 'right'
  },
  reassignButton: {
    color: '#4a90e2'
  }
};

var ReorderItem = function (_Component) {
  _inherits(ReorderItem, _Component);

  function ReorderItem(props) {
    _classCallCheck(this, ReorderItem);

    var _this = _possibleConstructorReturn(this, (ReorderItem.__proto__ || Object.getPrototypeOf(ReorderItem)).call(this, props));

    _this.state = {
      reorderAmount: 10
    };
    return _this;
  }

  _createClass(ReorderItem, [{
    key: 'onReorderChange',
    value: function onReorderChange(e) {
      this.setState({
        reorderAmount: e.target.value
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.props.onClose();
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate() {
      this.props.onUpdate(this.state.reorderAmount);
    }
  }, {
    key: 'getMessage',
    value: function getMessage() {
      var message = null;
      switch (this.props.reorderResponseState) {
        case 0:
          break;
        case 1:
          message = _react2.default.createElement(
            'p',
            { style: styles.reorderResponseSuccess },
            this.props.reorderResponseMessage
          );
          break;
        case 2:
          message = _react2.default.createElement(
            'p',
            { style: styles.reorderResponseFail },
            this.props.reorderResponseMessage
          );
          break;
        case 3:
          message = _react2.default.createElement(
            'p',
            { style: styles.reorderResponseReceiving },
            this.props.reorderResponseMessage
          );
          break;
        default:

      }
      return message;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_materialUi.CardTitle, {
          style: styles.cardTitle,
          title: "Reorder " + this.props.ItemName
        }),
        _react2.default.createElement(
          _materialUi.CardText,
          null,
          _react2.default.createElement(_materialUi.TextField, {
            floatingLabelText: 'Amount',
            value: this.state.reorderAmount,
            onChange: this.onReorderChange.bind(this)
          })
        ),
        _react2.default.createElement(
          _materialUi.CardText,
          null,
          this.getMessage()
        ),
        _react2.default.createElement(
          _materialUi.CardActions,
          { style: styles.action },
          this.props.reorderResponseState === 0 ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_materialUi.FlatButton, {
              label: 'Cancel',
              onClick: this.handleClose.bind(this) }),
            _react2.default.createElement(_materialUi.FlatButton, {
              label: 'Order Item',
              primary: true,
              onClick: this.handleUpdate.bind(this),
              style: styles.reassignButton })
          ) : _react2.default.createElement(_materialUi.FlatButton, {
            disabled: this.props.reorderResponseState === 3 ? true : false,
            primary: true,
            label: 'Close',
            onClick: this.handleClose.bind(this) })
        )
      );
    }
  }]);

  return ReorderItem;
}(_react.Component);

exports.default = ReorderItem;