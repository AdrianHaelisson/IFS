import jwt from "jsonwebtoken";
export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Token não informado" });
    }
    const [scheme, token] = authHeader.split(" ");
    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({ message: "Token inválido" });
    }
    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: "Token inválido ou expirado" });
    }
}
//# sourceMappingURL=authMiddleware.js.map