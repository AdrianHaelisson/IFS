import { ZodError } from "zod";
export function errorMiddleware(error, req, res, next) {
    if (error instanceof ZodError) {
        return res.status(400).json({
            message: "Erro de validação",
            errors: error.format(),
        });
    }
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
}
//# sourceMappingURL=errorMiddleware.js.map