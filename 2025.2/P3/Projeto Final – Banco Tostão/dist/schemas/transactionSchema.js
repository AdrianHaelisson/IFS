import { z } from "zod";
export const TransactionSchema = z.object({
    valor: z.number().positive("O valor deve ser positivo"),
    tipo: z.enum(["DEPOSITO", "SAQUE", "TRANSFERENCIA"]),
    destinatarioLogin: z.string().optional(),
}).refine((data) => {
    if (data.tipo === "TRANSFERENCIA" && !data.destinatarioLogin) {
        return false;
    }
    return true;
}, {
    message: "Destinatário é obrigatório para transferências",
    path: ["destinatarioLogin"],
});
//# sourceMappingURL=transactionSchema.js.map