import {z} from "zod";
import { AuthService } from "./auth-service";

const authDTOSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    async POST(req: Request){
        try {
            const body = req.body;
            const dto = authDTOSchema.safeParse(body);

            if(dto.error) throw new Error("Dados invalidos");

            const result = await this.authService.login(dto.data.email, dto.data.password);

            if(!result.token) throw new Error(result.message);

            return result.token;
        } catch (error) {
            console.error(error);
        }
    }
}