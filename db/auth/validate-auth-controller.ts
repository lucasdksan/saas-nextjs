import {z} from "zod";
import { AuthService } from "./auth-service";

const validateAuthSchema = z.object({
    token: z.string(),
});

export class ValidateAuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    async POST(req: Request){
        try {
            const body = req.body;
            const dto = validateAuthSchema.safeParse(body);

            if(dto.error) throw new Error("Dados inválidos");

            const result = await this.authService.validateToken(dto.data.token);

            if(result.error) throw new Error(result.error);

            return result.jwt;
        } catch (error) {
            console.error(error);
        }
    }
}