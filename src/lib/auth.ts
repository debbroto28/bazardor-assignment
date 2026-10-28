import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { postProcessMetadata } from "next/dist/lib/metadata/metadata-resolution-primitives";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL as string);
const db = client.db("bazar-dor");
const dbUrl = process.env.BETTER_AUTH_DB_URL;
if (!dbUrl) {
  throw new Error("BETTER_AUTH_DB_URL is missing. Add it in .env.local or Vercel Environment Variables.");
}
export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  
    emailAndPassword: {
        enabled : true
    },
    socialProviders: {
        google : {
          clientId: process.env.GOOGLE_CLIENT_ID as string ,
          clientSecret : process.env.GOOGLE_CLIENT_SECRET as string
        },
        github : {
          clientId : process.env.GIT_HUB_CLIENT_ID as string,
          clientSecret : process.env.GIT_HUB_CLIENT_SECRETS as string
        }
    } ,
  database: mongodbAdapter(db, {
    client,
  }),
});