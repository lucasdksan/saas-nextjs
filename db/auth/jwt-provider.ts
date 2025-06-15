import jwt from "jsonwebtoken";

export class JwtProvider {
    private secret: string;
    private expiresIn: number;

    constructor(secret: string = "", expiresIn: number = 3600){
        this.secret = secret;
        this.expiresIn = expiresIn;
    }

    generateToken(payload: object): string {
        return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
    }

    verifyToken(token: string) {
        try {
            return { error: null, jwt: jwt.verify(token, this.secret) };
        } catch (error) {
            console.error("Token invalido")
            return { error: "token invalido", jwt: null };
        }
    }
}