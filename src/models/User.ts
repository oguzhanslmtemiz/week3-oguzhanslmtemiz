import { Schema, model } from "mongoose";
import { IUserDocument } from "../interfaces/User";
import { hashPassword } from "../utils/helper";

const userSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

userSchema.pre("save", async function (this: IUserDocument, next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  this.password = await hashPassword(this.password);
  return next();
});

export default model<IUserDocument>("User", userSchema);
