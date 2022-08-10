import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
  const user = await User.findAll();
  res.json(user);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }
};

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existEmail = await User.findOne({
      where: {
        email: body.email,
      },
    });
    if (existEmail) {
      return res.status(400).json({
        msg: `Ya existe un usuario con el email ${body.email}`,
      });
    }

    const user = User.build(body);
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }
};

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        msg: `No existe un usuario con el id ${id}`,
      });
    }

    await user.update(body);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({
      msg: `No existe usuario con el id ${id}`,
    });
  }

  // NOTE: con destroy eliminamos el usuario de la db, no es muy aconsejable en el caso de que el objeto posea informacion que se pueda necesitar
  // await user.destroy();
  // por eso actualizamos el estado y podemos no mostrarlo

  await user.update({ state: false });

  res.json(user);
};
