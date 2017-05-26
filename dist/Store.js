'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fake = require('./fake');

var _fake2 = _interopRequireDefault(_fake);

var _materialUi = require('material-ui');

var _reactD3Basic = require('react-d3-basic');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMeasure = require('react-measure');

var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _legend = require('./images/legend2.png');

var _legend2 = _interopRequireDefault(_legend);

var _satisfaction = require('./images/satisfaction.png');

var _satisfaction2 = _interopRequireDefault(_satisfaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialogs = {
  mentors: 'MENTORS',
  delivery: 'DELIVERY',
  tracking: 'TRACKING',
  none: 'NONE'
};

var x = function x(d) {
  var parseDate = _d2.default.time.format("%Y%m").parse;
  return parseDate(d.monthIndex);
};

var styles = {
  root: {
    background: '#f1f1f1',
    height: 1320
  },
  dashboardCard: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16
  },
  dialogImage: {
    width: '100%',
    marginTop: 10
  },
  dialogBox: {
    position: 'relative',
    marginTop: '-150px'
  },
  trackDelivery: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trackImg: {
    width: 250,
    margin: '0 auto',
    textAlign: 'center'
  },
  navBar: {
    backgroundColor: '#1654BA',
    boxShadow: '0 5px 8px 0 #BFBFBF'
  },
  navBarTitle: {
    fontSize: 20
  },
  iconStyle: {
    color: '#ffffff',
    paddingTop: 15
  },
  splitter: {
    borderTop: '1px solid #D9D9D9',
    width: '100%'
  },
  hangout: {
    opacity: 0,
    position: 'absolute',
    left: 23,
    top: 13
  }
};

var Store = function (_React$Component) {
  _inherits(Store, _React$Component);

  function Store(props) {
    _classCallCheck(this, Store);

    var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this, props));

    _this.state = {
      pageTitle: 'Store',
      open: false,
      dialogOpen: Dialogs.none,
      categoryItems: [],
      categoryTotalAmount: 0,
      MonthlyNetsales: [],
      lineChartDimensions: {
        width: 350,
        height: 150
      },
      PieChartDimensions: {
        width: 350,
        height: 300
      }
    };
    return _this;
  }

  _createClass(Store, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        categoryItems: _fake2.default.categoryItems,
        categoryTotalAmount: 4919.48
      });
      this.setState({
        MonthlyNetsales: _fake2.default.monthlyNetsales
      });
    }
  }, {
    key: 'getValue',
    value: function getValue(d) {
      return +d.CurrentPeriodNetSalesAmountInDisplayCrcy;
    }
  }, {
    key: 'getName',
    value: function getName(d) {
      return d.MaterialGroup;
    }
  }, {
    key: 'handleOpenNav',
    value: function handleOpenNav() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: 'handleCloseNav',
    value: function handleCloseNav() {
      this.setState({
        open: false
      });
    }
  }, {
    key: 'handleMentors',
    value: function handleMentors() {
      this.setState({
        dialogOpen: Dialogs.mentors
      });
    }
  }, {
    key: 'handleDelivery',
    value: function handleDelivery() {
      this.setState({
        dialogOpen: Dialogs.delivery
      });
    }
  }, {
    key: 'handleTracking',
    value: function handleTracking() {
      this.setState({
        dialogOpen: Dialogs.tracking
      });
    }
  }, {
    key: 'handleCloseDialog',
    value: function handleCloseDialog() {
      this.setState({
        dialogOpen: Dialogs.none
      });
    }
  }, {
    key: 'onClientResize',
    value: function onClientResize(dimensions) {
      this.setState({
        lineChartDimensions: {
          width: dimensions.width,
          height: parseInt(dimensions.width / 2, 10)
        },
        PieChartDimensions: {
          width: dimensions.width,
          height: dimensions.width - 50
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var colors = ['#192E7C', '#7ED321', '#A1EFF9', '#53A8E2', '#1654BA'];
      var chartSeries = this.state.categoryItems.map(function (categoryItem, index) {
        var percent = Math.round(+categoryItem.CurrentPeriodNetSalesAmountInDisplayCrcy / _this2.state.categoryTotalAmount * 100);
        return {
          field: categoryItem.MaterialGroup,
          name: percent + '%',
          color: colors[index]
        };
      });
      var lineChartSeries = [{
        field: 'Chico Store',
        name: 'Chico Store',
        color: '#FF9800'
      }, {
        field: 'Panorama City Store',
        name: 'Panorama City Store',
        color: '#03A9F4'
      }, {
        field: 'Anaheim Store',
        name: 'Anaheim Store',
        color: '#3ACA60'
      }, {
        field: 'Laurel Canyon Store',
        name: 'Laurel Canyon Store',
        color: '#3F51B5'
      }];

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'wizbang',
            transitionAppear: true,
            transitionAppearTimeout: 3000,
            transitionEnter: false,
            transitionLeave: false },
          _react2.default.createElement(
            'div',
            null,
            lineChartSeries.length && this.state.categoryItems.length ? _react2.default.createElement(
              _materialUi.Card,
              { style: styles.dashboardCard },
              _react2.default.createElement(
                'div',
                { style: { padding: 12 }, className: 'multiStoresCard' },
                _react2.default.createElement(
                  'h5',
                  { style: { fontWeight: 300, fontSize: 22, marginLeft: 10 }, className: 'multiStoresCardTitle' },
                  'Regional sales are trending down'
                ),
                _react2.default.createElement(_reactD3Basic.LineChart, {
                  width: this.state.lineChartDimensions.width,
                  height: this.state.lineChartDimensions.height,
                  data: this.state.MonthlyNetsales,
                  chartSeries: lineChartSeries,
                  x: x,
                  xScale: 'time',
                  margins: { left: 10, right: 15, top: 0, bottom: 20 }
                }),
                _react2.default.createElement(
                  _reactMeasure2.default,
                  {
                    onMeasure: this.onClientResize.bind(this)
                  },
                  _react2.default.createElement('div', null)
                )
              ),
              _react2.default.createElement(_materialUi.Divider, null),
              _react2.default.createElement(
                _materialUi.CardActions,
                null,
                _react2.default.createElement(_materialUi.FlatButton, {
                  label: 'hangout with regional manager',
                  icon: _react2.default.createElement(
                    _materialUi.FontIcon,
                    { className: 'material-icons' },
                    'arrow_forward'
                  ),
                  style: { color: 'rgb(17, 63, 140)' }
                }),
                _react2.default.createElement('div', { id: 'placeholder-div', style: styles.hangout })
              )
            ) : null,
            this.state.categoryItems && chartSeries ? chartSeries.length && this.state.categoryItems.length ? _react2.default.createElement(
              _materialUi.Card,
              { style: styles.dashboardCard },
              _react2.default.createElement(
                'div',
                { style: { padding: 12, paddingBottom: 0 }, className: 'catagoryCard' },
                _react2.default.createElement(
                  'h5',
                  { style: { fontWeight: 300, fontSize: 22 } },
                  'Your store\'s top selling products'
                ),
                _react2.default.createElement(_reactD3Basic.PieChart, {
                  width: this.state.PieChartDimensions.width,
                  height: this.state.PieChartDimensions.height,
                  value: this.getValue,
                  data: this.state.categoryItems,
                  chartSeries: chartSeries,
                  name: this.getName.bind(this),
                  margins: { left: 5, right: 5, top: 0, bottom: 0 }
                }),
                _react2.default.createElement('img', { src: _legend2.default, alt: '', style: { width: "100%", marginBottom: 20, marginTop: -20 } })
              ),
              _react2.default.createElement(_materialUi.Divider, null),
              _react2.default.createElement(
                _materialUi.CardActions,
                null,
                _react2.default.createElement(_materialUi.FlatButton, {
                  label: 'Review Ad Spend',
                  href: '/enrique/ad-buy',
                  icon: _react2.default.createElement(
                    _materialUi.FontIcon,
                    { className: 'material-icons' },
                    'arrow_forward'
                  ),
                  style: { color: 'rgb(17, 63, 140)' }
                })
              )
            ) : null : null
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _materialUi.Card,
              { style: styles.dashboardCard },
              _react2.default.createElement(
                _materialUi.CardMedia,
                null,
                _react2.default.createElement('img', { src: _satisfaction2.default, alt: '' })
              ),
              _react2.default.createElement('div', {
                style: styles.splitter }),
              _react2.default.createElement(
                _materialUi.CardActions,
                null,
                _react2.default.createElement(_materialUi.FlatButton, {
                  label: 'Assign Mentors'
                  /*onClick={this.handleMentors.bind(this)}*/
                  , icon: _react2.default.createElement(
                    _materialUi.FontIcon,
                    { className: 'material-icons' },
                    'arrow_forward'
                  ),
                  style: { color: '#113F8C' }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Store;
}(_react2.default.Component);

exports.default = Store;