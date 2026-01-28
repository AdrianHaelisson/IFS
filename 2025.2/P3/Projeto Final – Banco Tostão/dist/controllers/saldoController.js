import { SaldoRepository } from "../repository/SaldoRepository.js";
export class SaldoController {
    saldoRepository;
    constructor() {
        this.saldoRepository = new SaldoRepository();
    }
    getByUsuarioId = async (req, res) => {
        const usuarioId = Number(req.params.usuarioId);
        const saldo = await this.saldoRepository.findByUsuarioId(usuarioId);
        return res.json(saldo);
    };
}
//# sourceMappingURL=saldoController.js.map