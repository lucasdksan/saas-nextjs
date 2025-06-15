import { EnvSchema } from "../_env";
import { JwtProvider } from "./jwt-provider";

export class AuthService {
    constructor(
        private readonly env: EnvSchema,
        private readonly jwtProvider: JwtProvider,
    ){}
    
    async login(email: string, password: string) {
        const result = await fetch(`${this.env.NEXT_PUBLIC_JSON_SERVER}/users?email=${email}&password=${password}`);
        
        if(!result.ok) return { message: "Falha ao tentar se conectar!", token: null };

        const data = await result.json();

        if(!Array.isArray(data) || data.length) return { message: "Falha ao tentar se conectar!", token: null };

        const user = data[0];

        const payload = { email: user.email, role: user.role, username: user.username };

        return { message: "Login efetuado", token: this.jwtProvider.generateToken(payload) };
    }

    async validateToken(token: string){
        return this.jwtProvider.verifyToken(token);
    }
}