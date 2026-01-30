import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UsuarioRepository } from "../repository/UsuarioRepository.js";

const usuarioRepository = new UsuarioRepository();

export class UsuarioController {
    async listar(req: Request, res: Response) {
        try {
            const usuarios = await usuarioRepository.listALL();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar usuários" });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const { login, senha } = req.body;

            if (!login) {
                return res.status(400).json({ error: "Login é obrigatório" });
            }

            const usuarioExistente = await usuarioRepository.findByLogin(login);

            if (usuarioExistente) {
                return res.json(usuarioExistente);
            }

            const novoUsuario = await usuarioRepository.criar(login, senha);
            res.status(201).json(novoUsuario);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Erro ao criar usuário" });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { login, senha } = req.body;
            const usuario = await usuarioRepository.findByLogin(login);

            if (!usuario) {
                return res.status(401).json({ error: "Usuário não encontrado" });
            }

            if (usuario.senha !== senha) {
                return res.status(401).json({ error: "Senha incorreta" });
            }

            const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET || "segredo", {
                expiresIn: "1d",
            });

            const { senha: _, ...usuarioSemSenha } = usuario;

            res.json({ usuario: usuarioSemSenha, token });
        } catch (error) {
            res.status(500).json({ error: "Erro ao realizar login" });
        }
    }
}
