"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

const routes = new (0, _express.Router)();

var _ToolController = require('./app/controllers/ToolController'); var _ToolController2 = _interopRequireDefault(_ToolController);

routes.get('/tools', _ToolController2.default.index);
routes.post('/tools', _ToolController2.default.store);
routes.delete('/tools/:id', _ToolController2.default.delete);

exports. default = routes;