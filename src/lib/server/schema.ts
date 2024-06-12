// Create your schema here
// Do not reference other schemas or AI
// You might need to reference the SQLite documentation to determine what field types to use
// For IDs, use non-integer types like UUID or GUID

import { foreignKey, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email"),
});

export const linksTable = sqliteTable("links", {
    id: text("id").primaryKey(),
    url: text("url").notNull(),
    name: text("name").notNull(),
    user_id: text("user_id").references(() => usersTable.id),
    order: integer("order", {
        mode: "number"
    }),
})
