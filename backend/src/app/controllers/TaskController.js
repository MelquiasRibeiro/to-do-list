import Task from '../models/Task';

class TaskController {
  async index(req, res) {
    const tasks = await Task.findAll();

    return res.json({ tasks });
  }

  async show(req, res) {
    const task = await Task.findByPk(req.params.id);

    return res.json({ task });
  }

  async store(req, res) {
    const newTask = await Task.create(req.body);

    return res.status(201).send(newTask);
  }

  async update(req, res) {
    const task = await Task.findByPk(req.params.id);

    const { title, description, finished } = await task.update(req.body);

    return res.json({ title, description, finished });
  }

  async destroy(req, res) {
    await Task.destroy({ where: { id: req.params.id } });

    return res.status(204);
  }
}

export default new TaskController();
