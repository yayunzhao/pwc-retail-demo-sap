'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  dashboardCard: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16
  },
  listItem: {
    fontSize: 16,
    padding: 16,
    paddingTop: 0,
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardBody: {
    padding: '16px 35% 20px 16px',
    background: 'url("/images/retail/dashboard/DeliveryToStore.png") no-repeat',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right'
  }
};

var DeliveryCard = function (_Component) {
  _inherits(DeliveryCard, _Component);

  function DeliveryCard() {
    _classCallCheck(this, DeliveryCard);

    return _possibleConstructorReturn(this, (DeliveryCard.__proto__ || Object.getPrototypeOf(DeliveryCard)).apply(this, arguments));
  }

  _createClass(DeliveryCard, [{
    key: 'onClickConfirmDelivery',
    value: function onClickConfirmDelivery() {
      this.props.onClickConfirmDelivery(this.props.schedule);
    }
  }, {
    key: 'getItemList',
    value: function getItemList() {
      return this.props.schedule.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { style: styles.listItem, key: 'deliveryCardItem' + index },
          _react2.default.createElement(
            'span',
            { style: { color: 'rgba(0,0,0,0.5)' } },
            item.material
          ),
          _react2.default.createElement(
            'span',
            { style: { color: 'rgba(0,0,0,0.75)' } },
            item.quantity
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var vendorName = this.props.schedule[0].vendorName;
      var deliveryDate = (0, _moment2.default)(this.props.schedule[0].deliveryDate, 'YYYYMMDD');
      var cardTitle = deliveryDate.format('Do MMM');

      return _react2.default.createElement(
        _materialUi.Card,
        { style: styles.dashboardCard },
        _react2.default.createElement(
          'div',
          { style: styles.cardBody },
          _react2.default.createElement(
            'h2',
            { style: { fontWeight: 300, marginTop: 0, marginBottom: 0 } },
            'Delivery on'
          ),
          _react2.default.createElement(
            'h2',
            { style: { fontWeight: 300, marginTop: 0 } },
            cardTitle
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.schedule[0].quantity + ' items from'
          ),
          _react2.default.createElement(
            'p',
            { style: { fontWeight: 300, fontSize: 18, marginBottom: 0 } },
            vendorName
          ),
          _react2.default.createElement('div', { style: { clear: 'both' } })
        ),
        _react2.default.createElement(_materialUi.Divider, null),
        _react2.default.createElement(
          _materialUi.CardActions,
          null,
          _react2.default.createElement(_materialUi.FlatButton, {
            label: 'Track delivery',
            secondary: true,
            onClick: this.props.handleTrackDelivery,
            icon: _react2.default.createElement(
              _materialUi.FontIcon,
              { className: 'material-icons' },
              'arrow_forward'
            ),
            style: { color: '#113F8C' }
          })
        ),
        _react2.default.createElement(_materialUi.Divider, null),
        _react2.default.createElement(
          _materialUi.CardActions,
          null,
          _react2.default.createElement(_materialUi.FlatButton, {
            label: 'Confirm delivery',
            onClick: this.onClickConfirmDelivery.bind(this),
            secondary: true,
            icon: _react2.default.createElement(
              _materialUi.FontIcon,
              { className: 'material-icons' },
              'arrow_forward'
            ),
            style: { color: '#113F8C' }
          })
        )
      );

      // return <div>
      //   <Card style={styles.dashboardCard}>
      //     <CardHeader
      //       title={cardTitle}
      //       titleStyle={{fontSize:28, fontWeight:300}}
      //       style={{paddingBottom: 0, height: 'auto'}}
      //       subtitle={vendorName}
      //     />
      //     <CardMedia mediaStyle={{textAlign: 'center', padding: 16, paddingLeft: '18%', paddingRight: '18%'}}>
      //       <img src={imagePath} />
      //     </CardMedia>
      //     {this.getItemList()}
      //     <Divider />
      //     <CardActions>
      //       <FlatButton
      //         label="Confirm delivery"
      //         secondary={true}
      //         onClick={this.onClickConfirmDelivery.bind(this)}
      //         style={{color: 'rgb(17, 63, 140)'}}
      //         icon={<FontIcon className="material-icons" >arrow_forward</FontIcon>}
      //       />
      //     </CardActions>
      //   </Card>
      // </div>
    }
  }]);

  return DeliveryCard;
}(_react.Component);

exports.default = DeliveryCard;