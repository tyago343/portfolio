export const getOne = Model => async (req, res) => {
  const id = req.body.id;
  try {
    const result = await Model.findById(id)
      .lean()
      .exec();
    if (!result) {
      res.status(400).end();
    }
    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};
export const getMany = Model => async (req, res) => {
  try {
    const result = await Model.find({})
      .lean()
      .exec();
    if (!result) {
      res.status(400).end();
    }
    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};
export const createOne = Model => async (req, res) => {
  const createdBy = 1;
  try {
    const result = await Model.create({ ...req.body, createdBy });
    if (!result) {
      res.status(400).end();
    }
    res.status(201).json({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};
export const updateOne = Model => async (req, res) => {
  try {
    const result = await Model.findOneAndUpdate(
      {
        createdBy: req.user._id,
        _id: req.params.id
      },
      req.body,
      { new: true }
    )
      .lean()
      .exec();
    if (!result) {
      res.status(400).end();
    }
    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};
export const removeOne = Model => async (req, res) => {
  try {
    const result = await Model.findOneAndremove({
      createdBy: req.user._id,
      _id: req.params.id
    });
    if (!result) {
      res.status(400).end();
    }
    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
});
