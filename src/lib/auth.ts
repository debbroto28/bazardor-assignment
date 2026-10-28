import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const dbUrl = process.env.BETTER_AUTH_DB_URL;

if (!dbUrl) {
  throw new Error("BETTER_AUTH_DB_URL is missing.");
}

const client = new MongoClient(dbUrl);
const db = client.db("bazar-dor");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GIT_HUB_CLIENT_ID as string,
      clientSecret: process.env.GIT_HUB_CLIENT_SECRETS as string,
    },
  },
});