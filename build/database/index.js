"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.connection = _mongoose2.default.connect(
      'mongodb+srv://pedroaraujo:alanwake15@cluster0-yznzy.mongodb.net/bossabox?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }
}

exports. default = new Database();
