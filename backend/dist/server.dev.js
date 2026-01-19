"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 4000; // MIDDLEWARE

app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // DB
// ROUTES

app.get('/', function (req, res) {
  res.send('API WORKING');
});
app.listen(port, function () {
  console.log("Server started on http://localhost:".concat(port));
});
//# sourceMappingURL=server.dev.js.map
