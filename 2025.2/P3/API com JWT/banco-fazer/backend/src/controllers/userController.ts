import { Request, Response } from "express";
import { UserRepository } from "../repository/UserRepository.js";

export class UserController{
    userRepository:UserRepository;

    constructor (){
        this.userRepository = new UserRepository();
    }

    criar = async (req: Request, res: Response) => {
        const { login, senha } = req.body;
        const existing = await this.userRepository.findByLogin(login);

        if (existing) {
            return res.status(400).json({message: "Login já existe"})
        }
        const user = await this.userRepository.criar(login, senha);

        return res.json(user)
    }
    listar = async (req: Request, res: Response) => {
    const users = await this.userRepository.listAll();
    return res.json(users);
    }
}