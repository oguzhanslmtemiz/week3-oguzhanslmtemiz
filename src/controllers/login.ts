import { Request, Response } from "express";
import httpStatus from "http-status";
import { read } from "../services/users";
import {
  comparePassword,
  getUserAgentFromHeader,
  generateToken,
} from "../utils/helper";

export const getUser = async (req: Request, res: Response) => {
  try {
    // find from db by username
    const user = await read(req.body.username);
    !user && res.status(httpStatus.NOT_FOUND).send({ error: "User Not Found" });
    if (user) {
      const match = await comparePassword(req.body.password, user.password);
      if (match) {
        req.session.user = getUserAgentFromHeader(req);

        // mongoose have a toObject method which converts the mongoose document into a plain JavaScript object.
        const { password, ...userObj } = user.toObject();
        const token = generateToken(user, req.session.user?.agent);
        const response = { ...userObj, token };

        res.status(httpStatus.FOUND).send(response);
      } else {
        res
          .status(httpStatus.NOT_FOUND)
          .send({ error: "Your password is not correct!" });
      }
    }
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};
