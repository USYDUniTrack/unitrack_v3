import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request) {
    // Prevents Caching
    noStore();

    const degrees = await sql`SELECT degreeid, degreename FROM Degrees;`;
    return NextResponse.json({ data: degrees["rows"] }, { status: 200 });
}
