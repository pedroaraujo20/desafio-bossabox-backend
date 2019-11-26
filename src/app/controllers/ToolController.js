import * as Yup from 'yup';
import Tool from '../schemas/Tool';

class ToolController {
  async index(req, res) {
    const { tag } = req.query;

    if (tag) {
      const tools = await Tool.find({ tags: tag }).select(
        'title link description tags'
      );
      return res.json(tools);
    }

    const tools = await Tool.find().select('title link description tags');

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

    const ToolExists = await Tool.findOne({ title });

    if (ToolExists) {
      return res.status(401).json({ error: 'Tool already exists' });
    }

    await Tool.create(req.body);

    return res.json({
      title,
      link,
      description,
      tags
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    await Tool.findByIdAndDelete(id);

    return res.status(204).json();
  }
}

export default new ToolController();
