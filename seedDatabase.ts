import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import userData from "./SEED_DATA/users.json";
import { usersTable } from "./src/lib/server/schema";
/*
You have been provided with a JSON file containing a list of users.

However, the data does not quite match the schema of the database.

Use JS to manipulate the data to match the schema.
*/

// IMPORTANT: USE THIS TO GENERATE UUIDS FOR THE ID FIELD
// Read the MDN docs for more information

// EXAMPLE:
// const id = crypto.randomUUID();

export const seedDatabase = async (db: BunSQLiteDatabase<Record<string, never>>) => {

    // all the data you need is in the userData import

    const formattedData: (typeof usersTable.$inferInsert)[] = userData.users.map((user) => {
        const fullName = user.name;
        const [firstName, lastName] = fullName.split(" ");
        return {
            id: crypto.randomUUID(),
            fullName,
            firstName,
            lastName,
            email: user.email,
            username: user.username,
            links: user.links
        };
    });
    
    await db.insert(usersTable).values(formattedData);
}