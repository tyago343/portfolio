import { Request, Response, NextFunction } from "express";
import { User } from "entity/User";
import { sign, verify } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { compare } from "bcryptjs";

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });
};
export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "1d",
    }
  );
};
export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
    path: "/refresh_token",
  });
};
export const userLogin = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    if (!(userName && password)) {
      return res.status(400).json({ error: "Missing password or username" });
    }
    const user: User | undefined = await getRepository(User).findOne({
      where: { userName },
    });
    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }
    const valid = await compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "invalid password" });
    }
    sendRefreshToken(res, createAccessToken(user));
    return {
      accessToken: createAccessToken(user),
      user,
    };
  } catch (err) {
    console.log(err);
    return res
      .send(400)
      .json({ ror: "We cannot manage the query, please try later" });
  }
};
export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["auth"];
  let jwtPayload;
  try {
    jwtPayload = <any>verify(token, process.env.REFRESH_TOKEN_SECRET!);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return res.status(401).json({ error: "user not authorized" });
  }
  const { userId, username } = jwtPayload;
  const newToken = sign(
    { userId, username },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "1d",
    }
  );
  res.setHeader("token", newToken);
  return next();
};
