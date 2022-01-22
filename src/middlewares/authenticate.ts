import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import {
  getTokenFromHeader,
  verifyToken,
  compareAgents,
} from "../utils/helper";

export const userAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "You Are Not Authorized" });
  }
  try {
    const decoded = verifyToken(token);
    compareAgents(req, res, next, decoded);
  } catch (error) {
    res.status(httpStatus.NON_AUTHORITATIVE_INFORMATION).send(error);
  }
};
