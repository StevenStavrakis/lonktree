import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import userData from "./SEED_DATA/users.json";
/*
You have been provided with a JSON file containing a list of users.

However, the data does not quite match the schema of the database.

Use JS to manipulate the data to match the schema.
*/

/*
IMPORTANT: USE THIS TO GENERATE UUIDS FOR THE ID FIELD
Read the MDN docs for more information

EXAMPLE:
const id = crypto.randomUUID();
*/

/**
 * This function takes a db instance and seeds the database with the data from the userData JSON file.
 * 
 * It is used in the setupDatabase.ts file.
 * 
 * @param db The drizzle database instance
 * @returns {void}
 */
export const seedDatabase = async (db: BunSQLiteDatabase<Record<string, never>>) => {

    // all the data you need is in the userData import

}