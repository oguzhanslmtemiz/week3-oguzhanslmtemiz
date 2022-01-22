import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUserDocument } from "../interfaces/User";

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

const getUserAgentFromHeader = (req: Request) => ({
  agent: req.headers["user-agent"],
});

const compareAgents = (
  req: Request,
  res: Response,
  next: NextFunction,
  decodedToken: JwtPayload
) => {
  const agentInHeader = getUserAgentFromHeader(req).agent;
  const agentInSession = req.session.user?.agent;
  const agentInToken = decodedToken.agent;

  if (!agentInSession) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "You must login first" });
  } else if (
    agentInHeader === agentInSession &&
    agentInHeader === agentInToken
  ) {
    next();
  } else {
    return res
      .status(httpStatus.FORBIDDEN)
      .send({ error: "You can't access from a different browser" });
  }
};

const generateToken = (
  { _id, username }: IUserDocument,
  agent: string | undefined
): string => {
  const payload = {
    _id,
    username,
    agent,
  };
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
};

const getTokenFromHeader = (req: Request): string | null => {
  return req.headers.authorization?.split(" ")[1] || null;
};

const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
};

export {
  hashPassword,
  comparePassword,
  getUserAgentFromHeader,
  compareAgents,
  generateToken,
  getTokenFromHeader,
  verifyToken,
};
