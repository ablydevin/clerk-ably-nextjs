import Ably from "ably/promises";
import { currentUser } from "@clerk/nextjs";

export const GET = async (req: Request, res: Response) => {
  const user = await currentUser();

  const clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const client = new Ably.Rest(process.env.NEXT_ABLY_API_KEY as string);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: user?.username as string
  });
  console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
  return Response.json(tokenRequestData);

};