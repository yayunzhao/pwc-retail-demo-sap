'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyComponent2 = exports.MyComponent = undefined;

var _MyComponent = require('./MyComponent');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

var _MyComponent3 = require('./MyComponent2');

var _MyComponent4 = _interopRequireDefault(_MyComponent3);

require('./root.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MyComponent = _MyComponent2.default;
exports.MyComponent2 = _MyComponent4.default; // Demo component
// this is only example component
// you can find tests in __test__ folder