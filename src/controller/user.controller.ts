import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from 'entity/User';
import { verify } from 'jsonwebtoken';
import { createRefreshToken, sendRefreshToken, createAccessToken } from './auth.controller';
import { hash } from 'bcryptjs'
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
        const password: string = String(req.body.password)
        const hashedPassword = await hash(password, 12);
        const user = {...req.body, password: hashedPassword};
        const createdUser = await getRepository(User).save(user);
        if (!createdUser) {
            return res.status(400).json({ error: "User cannot be created" })

        }
        return res.status(200).json({ result: createdUser })
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
            return res.status(400).json({ error: "User cannot be saved" })

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
export const refreshToken = async (req: Request, res: Response): Promise<Response> => {
    const token: string = req.cookies.jid;
    if (!token) {
        return res.json({ ok: false, accessToken: "" });
    }
    let payload: any = null;
    try {
        payload = verify(token, process.env.REFRESH_TOKEN_SECRET!)
    } catch (err) {
        console.log(err);
        return res.json({ ok: false, accessToken: "" })
    }
    const user = await getRepository(User).findOne(payload.id);
    if(!user) {
        return res.send({ ok: false, accessToken: "" });
    }
    if(user.tokenVersion !== payload.tokenVersion) {
        return res.send({ ok: false, accessToken: "" });
    }
    sendRefreshToken(res, createRefreshToken(user));
    return res.status(200).json({ok: true, accessToken: createAccessToken(user)})
}