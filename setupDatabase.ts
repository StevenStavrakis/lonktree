import { $ } from 'bun';
import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { seedDatabase } from './seedDatabase';
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

// DO NOT CHANGE THIS FILE

// remove the database file if it exists
if (await Bun.file(`lonktree_database.db`).exists()) {
    await $`rm lonktree_database.db`;
}

// create the database file
const sqlite = new Database('lonktree_database.db', {
    create: true,
    readwrite: true
});

// create the drizzle client
const db = drizzle(sqlite);

// generate schema migrations
await $`bunx drizzle-kit generate`;

// migrate the database
migrate(db, {
    migrationsFolder: "./drizzle"
});

// seed the database
await seedDatabase(db);

await $`bun run --bun vite dev`;