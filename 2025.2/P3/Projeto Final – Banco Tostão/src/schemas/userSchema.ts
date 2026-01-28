import { z } from "zod";

export const UserSchema = z.object({
    login: z.string().min(3, "Login deve ter pelo menos 3 caracteres"),
    senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});
