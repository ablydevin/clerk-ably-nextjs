import Ably from "ably/promises";
import { currentUser } from "@clerk/nextjs";

export const GET = async (req:Request, res:Response) => {
  const user = await currentUser();
 // Your application should perform some type of user 
 // authorization to validate that the user is allowed 
 // to receive a token before fulfilling the token request 
 // if (requesting_user.isAuthenticated) {

    const clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const client = new Ably.Rest(process.env.NEXT_ABLY_API_KEY as string);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: user?.username as string 
    });
    console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
    return Response.json(tokenRequestData);

  //} else {
 // res.status(401).json({ 'error':'User is not authorized' })
  //}
};