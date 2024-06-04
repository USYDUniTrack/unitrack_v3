import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET() {
    // Prevents Caching
    noStore();

    return NextResponse.json({ error: "Not allowing API Access" }, { status: 500 })
}
