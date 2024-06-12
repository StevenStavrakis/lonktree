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

try {

    // create the drizzle client
    const db = drizzle(sqlite);

    // push schema to database
    await $`bunx drizzle-kit push`;

    // seed the database
    await seedDatabase(db);

    await $`bun run --bun vite dev`;
} catch (e) {
    await $`rm lonktree_database.db`;
    console.error(e);
    process.exit(1);
}