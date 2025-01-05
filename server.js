"use strict";

var _http = require("http");
var _url = require("url");
var _next = _interopRequireDefault(require("next"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = parseInt(process.env.PORT || '3000', 10);
var dev = process.env.NODE_ENV !== 'production';
var app = (0, _next["default"])({
  dev: dev
});
var handle = app.getRequestHandler();
app.prepare().then(function () {
  (0, _http.createServer)(function (req, res) {
    var parsedUrl = (0, _url.parse)(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);
  console.log("> Server listening at http://localhost:".concat(port, " as ").concat(dev ? 'development' : process.env.NODE_ENV));
});