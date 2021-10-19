import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Post } from 'entity/Post'

export const getAllPosts = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const posts = await getRepository(Post).find();
        if (!posts) {
            return res.status(400).json({ error: "Cannot find any post" });
        }
        return res.status(200).json({ result: posts })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "We cannot manage the query, please try later" })
    }
}
export const getPostById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = Number(req.params.id);
        const post = await getRepository(Post).findOne(id);
        if (!post) {
            return res.status(400).json({ error: "we cannot find the post" });
        }
        return res.status(200).json({ result: post })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "We cannot manage the query, please try later" })
    }
}

//  I need to decide where i'm going to call this method.
export const getPostsByUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const userId: number = Number(req.params.id);
        const posts = await getRepository(Post).find({
            where: {
                author: userId
            }
        });
        if (!posts) {
            return res.status(400).json({ error: "We cannot find any post" });
        }
        return res.status(200).json({ result: posts })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "We cannot manage the query, please try later" })
    }
}
export const createPost = async (req: Request, res: Response): Promise<Response> => {
    try {
        console.log(req.file)
        const post = await getRepository(Post).save({...req.body, image: req.file?.filename});
        if (!post) {
            return res.status(400).json({ error: "Post cannot be saved" })
        }
        return res.status(200).json({ result: post })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "We cannot manage the query, please try later" })
    }
}
export const updatePost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = Number(req.params.id);
        const post = await getRepository(Post).findOne(id);
        if (!post) {
            return res.status(400).json({ error: "We cannot find any post" });
        }
        getRepository(Post).merge(post, req.body);
        const result = await getRepository(Post).save(post);
        if (!result) {
            return res.status(400).json({ error: "Post cannot be saved" })
        }
        return res.status(200).json({ result: post })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "We cannot manage the query, please try later" })
    }
}
export const deletePost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = Number(req.params.id);
        const post = await getRepository(Post).delete(id);
        if (!post) {
            return res.status(400).json({ error: "We cannot find any post" });
        }
        return res.status(200).json({ result: post })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "We cannot manage the query, please try later" })
    }
}