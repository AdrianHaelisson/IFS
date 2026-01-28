import { UserRepository } from "../repository/UserRepository.js";
import { UserSchema } from "../schemas/userSchema.js";
export class UserController {
    userRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    criar = async (req, res) => {
        const { login, senha } = UserSchema.parse(req.body);
        const existing = await this.userRepository.findByLogin(login);
        if (existing) {
            return res.status(400).json({ message: "Login já existe" });
        }
        const user = await this.userRepository.criar(login, senha);
        return res.json(user);
    };
    listar = async (req, res) => {
        const users = await this.userRepository.listAll();
        return res.json(users);
    };
}
//# sourceMappingURL=userController.js.map