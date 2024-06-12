import { db } from '$lib/server/db';
import { usersTable } from '$lib/server/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const profile = await db.select().from(usersTable).where(eq(usersTable.username, params.username));
    return {
        profile: profile[0]
    };
}) satisfies PageServerLoad;