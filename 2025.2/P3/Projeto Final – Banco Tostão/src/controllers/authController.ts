import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repository/UserRepository.js";
import { UserSchema } from "../schemas/userSchema.js";

export class AuthController {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }
  login = async (req: Request, res: Response) => {
    const { login, senha } = UserSchema.parse(req.body);

    const user = await this.userRepository.auth(login, senha);

    if (!user) {
      return res.status(401).json({ message: "Login ou senha inválidos" });
    }
    const secret = process.env.JWT_SECRET as string;

    const token = jwt.sign(
      {
        userId: user.id,
        login: user.login,
      },
      secret,
      {
        expiresIn: "1h",
      }
    );
    return res.json({ token });
  };
}
