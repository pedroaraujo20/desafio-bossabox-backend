"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Tool = require('../schemas/Tool'); var _Tool2 = _interopRequireDefault(_Tool);

class ToolController {
  async index(req, res) {
    const { tag } = req.query;

    if (tag) {
      const tools = await _Tool2.default.find({ tags: tag }).select(
        'title link description tags'
      );
      return res.json(tools);
    }

    const tools = await _Tool2.default.find().select('title link description tags');

    return res.json(tools);
  }

  async store(req, res) {
    const { title, link, description, tags } = req.body;

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string().required(),
      description: Yup.string().required(),
      tags: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const ToolExists = await _Tool2.default.findOne({ title });

    if (ToolExists) {
      return res.status(401).json({ error: 'Tool already exists' });
    }

    await _Tool2.default.create(req.body);

    return res.json({
      title,
      link,
      description,
      tags
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    await _Tool2.default.findByIdAndDelete(id);

    return res.status(204).json();
  }
}

exports. default = new ToolController();
