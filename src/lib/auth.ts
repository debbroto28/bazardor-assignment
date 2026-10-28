import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

// MongoClient throws synchronously when given an undefined connection string, which
// crashes `next build` while it collects page data for the auth route. The client
// connects lazily, so a placeholder lets the build finish; set BETTER_AUTH_DB_URL
// in the Netlify environment for auth to work at runtime.
const client = new MongoClient(
  process.env.BETTER_AUTH_DB_URL || "mongodb://127.0.0.1:27017"
);
const db = client.db("bazar-dor");

export const auth = betterAuth({
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