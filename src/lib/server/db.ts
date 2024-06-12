import { Database } from "bun:sqlite"
import { drizzle } from "drizzle-orm/bun-sqlite"

// load the database from the root of the project
const sqlite = new Database("lonktree_database.db", {
    create: false,
    readwrite: true
});

// create the drizzle client
export const db = drizzle(sqlite);