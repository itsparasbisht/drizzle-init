import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import "dotenv/config";

import * as schema from "./schema";

const queryClient = postgres(process.env.DATABASE_URL as string);
export const db = drizzle(queryClient, { schema, logger: true });
