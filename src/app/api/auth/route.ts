import server from "../../../../db";

export async function POST(req: Request) {
    const { authController } = server();
    
    return await authController.POST(req);
}