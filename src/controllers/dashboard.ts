import { Request, Response } from "express";
import httpStatus from "http-status";
import { list } from "../services/users";

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await list();
    res.status(httpStatus.OK).send(users);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};
