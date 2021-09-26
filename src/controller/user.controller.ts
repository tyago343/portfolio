import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from 'entity/User';

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = Number(req.params.id);
        const user = await getRepository(User).findOne(id);
        if (!user) {
            return res.status(400).json({ error: "User not found" })
        }
        return res.status(200).json({ result: user })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "The query has not be made" })
    }
}
export const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const users = await getRepository(User).find();
        if (!users) {
            return res.status(400).json({ error: "Users not found" })
        }
        return res.status(200).json({ result: users })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "The query has not be made" })
    }
}
export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await getRepository(User).save(req.body);
        if (!user) {
            return res.status(400).json({ error: "User cannot be created" })

        }
        return res.status(200).json({ result: user })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "The query has not be made" })
    }
}
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await getRepository(User).findOne(req.params.id);

        if (!user) {
            return res.status(400).json({ error: "User cannot be found" })

        }
        getRepository(User).merge(user, req.body);
        const result = await getRepository(User).save(user);
        if (!result) {
            return res.status(400).json({ error: "User cannot be found" })

        }
        return res.status(200).json({ result: user });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "The query has not be made" })
    }
};
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = Number(req.params.id);
        const deletedUser = await getRepository(User).delete(id);
        if (!deletedUser) {
            return res.status(400).json({ error: "User cannot be found" })

        }
        return res.status(200).json({ result: deletedUser });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "The query has not be made" })
    }
}