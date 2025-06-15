import { _env } from "./_env";
import { AuthController } from "./auth/auth-controller";
import { AuthService } from "./auth/auth-service";
import { JwtProvider } from "./auth/jwt-provider";
import { ValidateAuthController } from "./auth/validate-auth-controller";

function server(){
    const env = _env();
    const jwtProvider = new JwtProvider(env.NEXT_PUBLIC_AUTH_TOKEN, 3600);
    const authService = new AuthService(env, jwtProvider);
    const authController = new AuthController(authService);
    const validateAuthController = new ValidateAuthController(authService);

    return {
        authController,
        validateAuthController,
    };
}

export default server;