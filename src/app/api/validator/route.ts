import server from "../../../../db";

export async function POST(req: Request) {
    const { validateAuthController } = server();
    
    return await validateAuthController.POST(req);
}