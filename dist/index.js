'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DepartmentComponent = exports.StoreComponent = undefined;

var _StoreComponent = require('./StoreComponent');

var _StoreComponent2 = _interopRequireDefault(_StoreComponent);

var _DepartmentComponent = require('./DepartmentComponent');

var _DepartmentComponent2 = _interopRequireDefault(_DepartmentComponent);

require('./css/root.css');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Demo component
// this is only example component
// you can find tests in __test__ folder

(0, _reactTapEventPlugin2.default)();

exports.StoreComponent = _StoreComponent2.default;
exports.DepartmentComponent = _DepartmentComponent2.default;