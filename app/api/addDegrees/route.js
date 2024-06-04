import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request) {
    // Prevents Caching
    noStore();

    const { searchParams } = new URL(request.url);
    const degreeName = searchParams.get('degreeName');

    const degrees = await sql`SELECT * FROM Degrees;`;
    return NextResponse.json({ degrees, message: "Not allowing API Access" }, { status: 200 });
}
