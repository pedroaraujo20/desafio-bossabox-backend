"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const ToolSchema = new _mongoose2.default.Schema(
  {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: [],
      default: undefined
    }
  },
  {
    timestamps: true
  }
);

exports. default = _mongoose2.default.model('Tool', ToolSchema);
