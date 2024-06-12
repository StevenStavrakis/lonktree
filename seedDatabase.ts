import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import userData from "./SEED_DATA/users.json";
/*
You have been provided with a JSON file containing a list of users.

However, the data does not quite match the schema of the database.

Use JS to manipulate the data to match the schema.
*/
export const seedDatabase = async (db: BunSQLiteDatabase<Record<string, never>>) => {

    // all the data you need is in the userData import
    
}